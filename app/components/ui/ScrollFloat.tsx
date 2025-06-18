"use client";

import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="inline-block" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // ตรวจสอบว่า scrollContainerRef มีอยู่จริงและ mounted แล้ว
    const scroller = scrollContainerRef?.current;
    
    // รอให้ DOM พร้อมก่อนสร้าง animation
    const timer = setTimeout(() => {
      const charElements = el.querySelectorAll(".inline-block");
      
      if (charElements.length === 0) return;

      // สร้าง ScrollTrigger configuration
      const scrollTriggerConfig: any = {
        trigger: el,
        start: scrollStart,
        end: scrollEnd,
        scrub: true,
        // เพิ่ม refreshPriority เพื่อให้ ScrollTrigger refresh หลังจาก DOM พร้อม
        refreshPriority: -1,
      };

      // เพิ่ม scroller เฉพาะเมื่อมีอยู่จริงและ mounted แล้ว
      if (scroller && scroller.parentElement) {
        scrollTriggerConfig.scroller = scroller;
      }

      const animation = gsap.fromTo(
        charElements,
        {
          willChange: "opacity, transform",
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: "50% 0%",
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: stagger,
          scrollTrigger: scrollTriggerConfig,
        }
      );

      // Cleanup function
      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === el) {
            trigger.kill();
          }
        });
      };
    }, 100); // รอ 100ms เพื่อให้ DOM พร้อม

    // Cleanup timeout หาก component unmount ก่อนที่ timer จะทำงาน
    return () => {
      clearTimeout(timer);
      // Kill all ScrollTriggers ที่เกี่ยวข้องกับ element นี้
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
  ]);

  // เพิ่ม effect สำหรับ refresh ScrollTrigger เมื่อ scrollContainerRef เปลี่ยน
  useEffect(() => {
    if (scrollContainerRef?.current) {
      // รอให้ scroller element พร้อมแล้วค่อย refresh
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [scrollContainerRef?.current]);

  return (
    <h2
      ref={containerRef}
      className={`my-5 overflow-hidden ${containerClassName}`}
    >
      <span
        className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;