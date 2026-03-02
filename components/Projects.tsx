import React from 'react';
import { projects } from '@/data';
import { Meteors } from './ui/meteors';

const Projects = () => {
  return (
    <section id="projects" className="flex justify-center mt-10 mb-30">
      {/* IN PROGRESS: FOR NOW SHOW COOL METEOR BANNER */}

      {/* <h1 className="text-4xl font-bold text-center">
        A small selection of
        <span className="text-purple-300"> recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, desc, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-130 h-100 flex items-center justify-center sm:w-96 w-[80vw]"
          >
            {title}
          </div>
        ))}
      </div> */}

      <div className="relative w-full max-w-2xl h-64">
        <div className="absolute inset-0 h-full w-full scale-[0.90] transform rounded-full bg-red-500 bg-linear-to-r from-blue-500 to-purple-500 blur-[52px]" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
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

          <h1 className="relative z-50 mb-4 text-3xl font-bold text-white">
            Projects are in progress...
          </h1>

          <p className="relative z-50 mb-4 text-lg font-normal text-slate-500">
            Come back soon! <br /> Some exciting things are under way :&#41;
          </p>

          <Meteors number={20} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
