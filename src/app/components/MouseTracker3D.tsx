import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMouseTracker3D() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
}

export function get3DTransform(mouseX: number, mouseY: number, intensity: number = 10) {
  const rotateY = mouseX * intensity;
  const rotateX = -mouseY * intensity;
  return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

export function get3DTranslate(mouseX: number, mouseY: number, depth: number = 20) {
  const translateX = mouseX * depth;
  const translateY = mouseY * depth;
  return `translate3d(${translateX}px, ${translateY}px, 0px)`;
}
