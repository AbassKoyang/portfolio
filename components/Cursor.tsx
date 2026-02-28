"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      posX += (mouseX - posX) * 0.1;
      posY += (mouseY - posY) * 0.1;

      cursor.style.transform = `translate(${posX}px, ${posY}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none
        fixed
        top-0
        left-0
        size-2
        bg-primary-white
        -translate-x-1/2
        -translate-y-1/2
        z-[9999]
      "
    />
  );
}