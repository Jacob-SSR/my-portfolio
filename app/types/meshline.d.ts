import { ReactThreeFiber } from "@react-three/fiber";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: ReactThreeFiber.Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
      meshLineMaterial: ReactThreeFiber.MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>;
    }
  }
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ReactThreeFiber.Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: ReactThreeFiber.MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>;
  }
}

interface MeshLineMaterialProps {
  color?: THREE.ColorRepresentation;
  opacity?: number;
  transparent?: boolean;
  depthTest?: boolean;
  depthWrite?: boolean;
  resolution?: THREE.Vector2 | [number, number];
  useMap?: boolean;
  map?: THREE.Texture;
  repeat?: THREE.Vector2 | [number, number];
  lineWidth?: number;
  dashArray?: number;
  dashOffset?: number;
  dashRatio?: number;
  alphaTest?: number;
  alphaMap?: THREE.Texture;
  sizeAttenuation?: boolean;
  near?: number;
  far?: number;
  worldUnits?: boolean;
}

interface MeshLineGeometryProps {
  points?: THREE.Vector3[] | Float32Array;
  widthCallback?: (p: number) => number;
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ReactThreeFiber.Object3DNode<MeshLineGeometry, typeof MeshLineGeometry> & MeshLineGeometryProps;
    meshLineMaterial: ReactThreeFiber.MaterialNode<MeshLineMaterial, typeof MeshLineMaterial> & MeshLineMaterialProps;
  }
}