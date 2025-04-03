"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { cn } from "../../lib/utils";

interface FloatingProps {
  children: ReactNode;
  className?: string;
  sensitivity?: number;
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  depth?: number;
}

export function FloatingElement({
  children,
  className,
  depth = 1,
}: FloatingElementProps) {
  return (
    <div
      className={cn("absolute", className)}
      style={{ "--depth": depth } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export default function Floating({
  children,
  className,
  sensitivity = 0.5,
}: FloatingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    if (!ref.current) return;

    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center (normalized to -1 to 1)
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);

      setMousePosition({ x: mouseX, y: mouseY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dimensions]);

  useEffect(() => {
    x.set(mousePosition.x * sensitivity * 50);
    y.set(mousePosition.y * sensitivity * 50);
  }, [mousePosition, sensitivity, x, y]);

  return (
    <div
      ref={ref}
      className={cn("relative w-full h-full overflow-hidden", className)}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const depth = Number(
            child.props.style?.["--depth"] || child.props.depth || 1
          );

          return React.cloneElement(child, {
            style: {
              ...child.props.style,
              x: useTransform(springX, (value) => value * depth),
              y: useTransform(springY, (value) => value * depth),
            },
            className: cn(child.props.className),
          });
        }
        return child;
      })}
    </div>
  );
}
