'use client';

import { useState } from 'react';
import { workExperience } from '@/data';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Experience = () => {
  const [activeCard, setActiveCard] = useState<
    (typeof workExperience)[number] | null
  >(null);

  const handleClick = (card: (typeof workExperience)[number] | null) => {
    if (card === activeCard) setActiveCard(null);
    else setActiveCard(card);
  };

  return (
    <section id="experience" className="my-20 py-20 lg:h-200">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-20">
        Check out my
        <span className="text-purple-300"> work experience</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5">
        {/* Expanding Cards - grow on click and pulse boxshadow */}
        {workExperience.map((work) => (
          <div key={work.id} className="flex flex-col h-full">
            <motion.div
              layout
              onClick={() => handleClick(work)}
              animate={{
                width: activeCard === work ? 400 : 300,
                height: activeCard === work ? 600 : 300,
                boxShadow:
                  activeCard === work
                    ? [
                        '0 0 5px  rgba(168,85,247,0.4)',
                        '0 0 5px rgba(168,85,247,1)',
                        '0 0 5px  rgba(168,85,247,0.4)',
                      ]
                    : '0 0 0px rgba(0,0,0,0)',
              }}
              transition={{
                width: { type: 'spring', stiffness: 200, damping: 25 },
                height: { type: 'spring', stiffness: 200, damping: 25 },
                boxShadow:
                  activeCard === work
                    ? {
                        duration: 1.25,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                    : undefined,
              }}
              className="relative flex flex-col bg-card cursor-pointer rounded-2xl border border-white/10 p-5"
            >
              <div className="flex flex-col items-center w-full">
                <Image
                  src={work.thumbnail}
                  alt={work.title + '- thumbnail'}
                  width={100}
                  height={100}
                />
                <h3 className="dark:text-white text-2xl font-semibold text-center">
                  {work.title}
                </h3>
                <h4 className="dark:text-gray-400 text-xl">{work.company}</h4>

                {/* Animate in the descriptions: p tags */}
                <AnimatePresence>
                  {activeCard === work && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.1 },
                      }}
                      transition={{
                        duration: 0.15,
                        delay: 0.2,
                      }}
                      className="flex flex-col justify-around gap-3 p-5"
                    >
                      {work.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Animated arrow that sticks to bottom of card */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                <motion.div
                  animate={{
                    y: [0, 5, 0],
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {activeCard === work ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
