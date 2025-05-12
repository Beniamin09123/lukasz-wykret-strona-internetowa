"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

export function TestimonialCard({ handleShuffle, testimonial, position, id, author }) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[600px] w-[400px] md:w-[600px] select-none place-content-center space-y-8 rounded-2xl border-2 border-[#2C65C8] bg-white p-8 md:p-12 shadow-xl ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="p-4 rounded-xl bg-[#2C65C8]/10 mx-auto">
        {testimonial.icon && <testimonial.icon className="w-16 h-16 text-[#2C65C8]" />}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-center gradient-text leading-tight">{testimonial.title}</h3>
      <p className="text-center text-lg md:text-xl text-foreground/70 leading-relaxed">{testimonial.description}</p>
      <div className="grid grid-cols-3 gap-6">
        {testimonial.stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="font-montserrat font-bold text-xl md:text-2xl text-[#2C65C8]">{stat.value}</p>
            <p className="text-sm md:text-base text-foreground/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}