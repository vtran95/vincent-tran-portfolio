'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React from 'react';

// Pseudorandom function to replace Math.random
function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteorCount = number || 20;
  const width: number = 442;

  const meteors = new Array(meteorCount).fill(true).map((_, idx) => {
    return {
      id: idx,
      delay: (pseudoRandom(idx) * 5).toFixed(6), // Random delay between 0-5s
      duration: Math.floor(pseudoRandom(idx) * 5 + 5), // Keep some randomness in duration
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((meteor, idx) => {
        const meteorCount = number || 20;
        // Calculate position to evenly distribute meteors across container width
        const position = idx * (width / meteorCount); // Spread across width range

        return (
          <span
            key={meteor.id}
            className={cn(
              'animate-meteor-effect absolute h-0.5 w-0.5 rotate-45 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
              "before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-[50%] before:transform before:bg-linear-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: '-20px', // Start above the container
              left: `${position}px`,
              animationDelay: `${meteor.delay}s`,
              animationDuration: `${meteor.duration}s`,
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
