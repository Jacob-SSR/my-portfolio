/* eslint-disable react/no-unknown-property */
"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

// replace with your own imports, see the usage snippet for details
const cardGLB = "/assets/Lanyard/card.glb";
const lanyard = "/assets/Lanyard/lanyard.png";

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
}: LanyardProps) {
  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
}

function Band({ maxSpeed = 50, minSpeed = 0 }: BandProps) {
  // Using "any" for refs since the exact types depend on Rapier's internals
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: "dynamic" as RigidBodyProps["type"],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const { nodes, materials } = useGLTF(cardGLB) as any;
  const texture = useTexture(lanyard);

  // เพิ่ม state สำหรับตรวจสอบว่า physics พร้อมแล้วหรือไม่
  const [physicsReady, setPhysicsReady] = useState(false);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0), // กำหนดค่าเริ่มต้นที่ชัดเจน
        new THREE.Vector3(0.5, 0, 0),
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(1.5, 0, 0),
      ])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  const [isSmall, setIsSmall] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = (): void => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  // ฟังก์ชันสำหรับตรวจสอบและทำความสะอาดค่า NaN
  const safeVector3 = (source: any, fallback: THREE.Vector3): THREE.Vector3 => {
    if (!source) return fallback;

    const translation = source.translation();
    if (!translation) return fallback;

    const x =
      isNaN(translation.x) || !isFinite(translation.x)
        ? fallback.x
        : translation.x;
    const y =
      isNaN(translation.y) || !isFinite(translation.y)
        ? fallback.y
        : translation.y;
    const z =
      isNaN(translation.z) || !isFinite(translation.z)
        ? fallback.z
        : translation.z;

    return new THREE.Vector3(x, y, z);
  };

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== "boolean") {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    // ตรวจสอบว่า RigidBody ทั้งหมดพร้อมแล้วหรือไม่
    if (
      fixed.current &&
      j1.current &&
      j2.current &&
      j3.current &&
      card.current
    ) {
      if (!physicsReady) {
        setPhysicsReady(true);
      }

      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) {
          const initialTranslation = ref.current.translation();
          ref.current.lerped = new THREE.Vector3().copy(initialTranslation);
        }

        const currentTranslation = ref.current.translation();
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(currentTranslation))
        );
        ref.current.lerped.lerp(
          currentTranslation,
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });

      // ใช้ safeVector3 เพื่อป้องกัน NaN
      const p0 = safeVector3(j3.current, new THREE.Vector3(1.5, 0, 0));
      const p1 =
        j2.current.lerped ||
        safeVector3(j2.current, new THREE.Vector3(1, 0, 0));
      const p2 =
        j1.current.lerped ||
        safeVector3(j1.current, new THREE.Vector3(0.5, 0, 0));
      const p3 = safeVector3(fixed.current, new THREE.Vector3(0, 0, 0));

      // อัพเดท curve points
      curve.points[0].copy(p0);
      curve.points[1].copy(p1);
      curve.points[2].copy(p2);
      curve.points[3].copy(p3);

      // อัพเดท MeshLine geometry เมื่อ physics พร้อมแล้ว
      if (band.current && band.current.geometry) {
        try {
          const points = curve.getPoints(32);
          // ตรวจสอบ points ก่อนส่งให้ setPoints
          const validPoints = points.filter(
            (point) =>
              !isNaN(point.x) &&
              !isNaN(point.y) &&
              !isNaN(point.z) &&
              isFinite(point.x) &&
              isFinite(point.y) &&
              isFinite(point.z)
          );

          if (validPoints.length > 0) {
            band.current.geometry.setPoints(validPoints);
          }
        } catch (error) {
          console.warn("Error updating MeshLine geometry:", error);
        }
      }

      // อัพเดท card rotation
      if (card.current) {
        const cardAngvel = card.current.angvel();
        const cardRotation = card.current.rotation();

        if (cardAngvel && cardRotation) {
          ang.copy(cardAngvel);
          rot.copy(cardRotation);
          card.current.setAngvel({
            x: ang.x,
            y: ang.y - rot.y * 0.25,
            z: ang.z,
          });
        }
      }
    }
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody
          ref={fixed}
          {...segmentProps}
          type={"fixed" as RigidBodyProps["type"]}
        />
        <RigidBody
          position={[0.5, 0, 0]}
          ref={j1}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1, 0, 0]}
          ref={j2}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1.5, 0, 0]}
          ref={j3}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={
            dragged
              ? ("kinematicPosition" as RigidBodyProps["type"])
              : ("dynamic" as RigidBodyProps["type"])
          }
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      {/* แสดง MeshLine เมื่อ physics พร้อมแล้ว */}
      {physicsReady && (
        <mesh ref={band}>
          <meshLineGeometry />
          <meshLineMaterial
            color="white"
            depthTest={false}
            resolution={isSmall ? [1000, 2000] : [1000, 1000]}
            useMap
            map={texture}
            repeat={[-4, 1]}
            lineWidth={1}
          />
        </mesh>
      )}
    </>
  );
}
