import React from 'react';
import Image from 'next/image';
import MagicButton from './ui/magic-button';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className="w-full relative pt-20 pb-10" id="contact">
      {/* Grid background */}
      <div className="w-full absolute left-0 bottom-25 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover opacity-50"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center md:min-h-72">
        <h1 className="text-4xl font-bold lg:max-w-[45vw]">
          Let&apos;s get in touch
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I&apos;m always open to discussing new ideas, collaborations, or
          opportunities.
        </p>
        <a href="mailto:vintran1995@gmail.com">
          <MagicButton
            title="Contact me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* End of page details and social media */}
      <div className="flex mt-16 md:flex-row flex-col justify-center md:justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-center mb-2 md:mb-0">
          Copyright © 2026 Vincent Tran
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center 
                backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-gray-700/50
                rounded-lg border border-black-100"
            >
              <Image
                src={profile.img}
                alt={profile.name}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>

        <p className="text-gray-200 text-xs opacity-50 mt-5">
          Icons in Experience Section by{' '}
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
