"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("w-full", className)}>
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-2">
          What's It Like to Be a Student at INTERLINK?
        </h2>
        <p className="text-lg text-gray-700">
          Take a look at student life, inside and outside the classroom!
        </p>
      </div>

      <div className="w-full" ref={gridRef}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        >
          <div className="grid gap-10">
            {firstPart.map((el, idx) => (
              <motion.div
                style={{
                  y: translateYFirst,
                  x: translateXFirst,
                  rotateZ: rotateXFirst,
                }}
                key={"grid-1" + idx}
              >
                <img
                  src={el}
                  className="w-full h-auto object-cover rounded-lg gap-10 !m-0 !p-0 aspect-[3/2]"
                  alt="Student life at INTERLINK"
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {secondPart.map((el, idx) => (
              <motion.div key={"grid-2" + idx}>
                <img
                  src={el}
                  className="w-full h-auto object-cover rounded-lg gap-10 !m-0 !p-0 aspect-[3/2]"
                  alt="Student life at INTERLINK"
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {thirdPart.map((el, idx) => (
              <motion.div
                style={{
                  y: translateYThird,
                  x: translateXThird,
                  rotateZ: rotateXThird,
                }}
                key={"grid-3" + idx}
              >
                <img
                  src={el}
                  className="w-full h-auto object-cover rounded-lg gap-10 !m-0 !p-0 aspect-[3/2]"
                  alt="Student life at INTERLINK"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
