import React from 'react';
import { projects } from '@/data';
import { Meteors } from './ui/meteors';
import Image from 'next/image';

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col justify-center mt-10 pt-35 mb-35">
      <h1 className="text-4xl font-bold text-center mb-10">
        A small selection of
        <span className="text-purple-300"> recent projects</span>
      </h1>
      <div className="flex flex-wrap justify-center h-full px-4 my-10 gap-16">
        {projects.map(({ id, title, desc, img, iconLists, link }) => (
          <div
            key={id}
            className="flex items-center justify-center sm:w-110 w-[80vw] h-full"
          >
            <a href="https://code-to-english.vercel.app/" target="_blank" className="group block">
              <div className="relative flex flex-col bg-card cursor-pointer rounded-2xl overflow-hidden p-[2px]
                before:content-[''] before:absolute before:inset-[-50%] 
                before:animate-border-spin before:bg-pink-purple-conic
                before:invisible group-hover:before:visible">
                <div className="relative flex flex-col bg-card cursor-pointer rounded-2xl border border-white/10 p-7">
                  <div className="relative w-100 h-full">
                    <Image src={img} alt={title} width={500} height={300} className="w-full h-auto" />
                    <div className="absolute -bottom-8 -right-3 flex flex-col w-fit border border-white/30 rounded-full bg-background p-2">
                      {iconLists.map(icon => {
                        return <Image key={icon} src={icon} alt={icon} width={25} height={25} className="py-1.5" />
                      })}
                    </div>
                  </div>
                  <h3 className="dark:text-white text-2xl font-semibold my-2 ml-2">{title}</h3>

                  {/* TO DO: Add tech stack tags */}

                  <div className="ml-2">
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
        <div className="flex sm:w-110 w-[80vw]">
          <div className="relative flex flex-col justify-center w-full h-full bg-gray-900 rounded-2xl border border-white/10 p-10 overflow-hidden">
            <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
            <h1 className="relative z-50 mb-4 text-2xl font-bold text-white">
              More projects are in progress...
            </h1>
            <p className="relative z-50 mb-4 text-lg font-normal text-slate-500">
              Come back soon! <br /> Some exciting things are under way :&#41;
            </p>
            <Meteors number={10} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
