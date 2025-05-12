"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data, title, subtitle }: { 
  data: TimelineEntry[];
  title: React.ReactNode;
  subtitle: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 40%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        {title}
        <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 text-lg text-center max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.23, 1, 0.32, 1]
              }
            }}
            viewport={{ once: true, margin: "-20%" }}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#2C65C8]/20 border border-[#2C65C8]/30" />
              </div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: [0.23, 1, 0.32, 1]
                  }
                }}
                viewport={{ once: true, margin: "-20%" }}
                className="pl-16 md:pl-20"
              >
                <h3 
                  className="text-xl md:text-4xl font-bold text-[#2C65C8] flex items-center gap-2"
                  style={{ fontFamily: 'DM Serif Display' }}
                >
                  <span>Krok</span>
                  <span>{index + 1}</span>
                </h3>
              </motion.div>
            </div>

            <div className="relative pl-16 md:pl-4 pr-4 w-full pt-2 md:pt-0">
              {item.content}
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#2C65C8]/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#2C65C8] via-[#2C65C8] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};