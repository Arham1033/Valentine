"use client";
import React, { useEffect, useState } from "react";

const HeartRain = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartArray = Array.from({ length: 25 }).map(() => {
      const size = 20 + Math.random() * 20; 
      const left = 5 + Math.random() * (90 - (size / window.innerWidth) * 100);
      return {
        left,
        size,
        delay: Math.random() * 1.5,
        duration: 2.5 + Math.random() * 1.5,
      };
    });
    setHearts(heartArray);
  }, []);

  if (hearts.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {hearts.map((heart, i) => (
        <img
          key={i}
          src="/p1.png"
          className="absolute animate-heartFall pointer-events-none"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            top: `${-heart.size - Math.random() * 30}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
          alt=""
        />
      ))}
    </div>
  );
};


export default HeartRain;
