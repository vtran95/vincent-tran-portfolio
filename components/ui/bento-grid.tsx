'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { BackgroundGradientAnimation } from './background-gradient-animation';
import MagicButton from './magic-button';
import { IoCopyOutline } from 'react-icons/io5';
import Image from 'next/image';
import { techStack } from '@/data';
import TechItem from './tech-item';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-4 gap-4 lg:gap-8',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('vintran1995@gmail.com');
    setCopied(true);
  };

  return (
    <div
      className={cn(
        'group/bento relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl transition duration-200 hover:shadow-xl dark:shadow-none overflow-hidden border border-white/10',
        className,
      )}
      style={{
        background: '#020024',
        backgroundColor:
          'linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(69, 69, 82, 1) 35%, rgba(23, 212, 255, 1) 100%)',
      }}
    >
      <div className={`${id === 4 && 'flex justify-center'} h-full`}>
        {/* Background image container for all cells - optional*/}
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
              width={500}
              height={500}
              loading="eager"
            />
          )}
        </div>

        {/* Second background image container for all cells - optional */}
        <div
          className={`absolute right-0 -bottom-5 ${id === 3 && 'w-full opacity-80'}`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
              width={500}
              height={500}
            />
          )}
        </div>

        {/* Background gradient container for the copy email cell */}
        {id === 4 && <BackgroundGradientAnimation />}

        {/* Cell content */}
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10',
          )}
        >
          <div className="font-sans font-extralight text-sm md:text-xs lg:text-base text-[#c1c2d3] z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {/* Tech stack bubbles for first cell */}
          {id === 1 && (
            <div className="mt-10 px-1 sm:pl-6 md:pl-8">
              <div className="flex flex-row flex-wrap mx-auto gap-3 lg:gap-8 cursor-default">
                {techStack.map((tech) => (
                  <TechItem key={tech.title + tech.id} {...tech} />
                ))}
              </div>
            </div>
          )}

          {/* Magic Button for copying email */}
          {id === 4 && (
            <div className="mt-5 relative">
              <MagicButton
                title={copied ? 'Email copied!' : 'Copy my email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161A31]"
                handleClick={handleCopy}
              ></MagicButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
