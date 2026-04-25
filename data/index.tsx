import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { PiFileCSharp, PiFileCpp } from 'react-icons/pi';
import { FaJava } from 'react-icons/fa6';

export const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Experience', link: '#experience' },
  { name: 'Contact', link: '#contact' },
];

export const techStack = [
  { id: 1, title: 'React.js', icon: SiReact },
  { id: 2, title: 'Next.js', icon: SiNextdotjs },
  { id: 3, title: 'JavaScript', icon: SiJavascript },
  { id: 4, title: 'TypeScript', icon: SiTypescript },
  { id: 5, title: 'HTML5', icon: SiHtml5 },
  { id: 6, title: 'CSS3', icon: SiCss3 },
  { id: 7, title: '.NET', icon: DiVisualstudio },
  { id: 8, title: 'Node.js', icon: SiNodedotjs },
  { id: 9, title: 'Express', icon: SiExpress },
  { id: 10, title: 'MySQL', icon: SiMysql },
  { id: 11, title: 'MongoDB', icon: SiMongodb },
  { id: 12, title: 'C#', icon: PiFileCSharp },
  { id: 13, title: 'C++', icon: PiFileCpp },
  { id: 14, title: 'Java', icon: FaJava },
];

export const gridItems = [
  {
    id: 1,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-5 md:col-span-6 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-128 w-92 opacity-80',
    titleClassName: '',
    img: '/grid.svg',
    spareImg: '',
  },

  {
    id: 2,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 3,
    title: 'Currently looking for a new position',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 4,
    title: 'Want to learn more about me?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Code to English',
    desc: 'An AI-powered code analysis tool that explains, debugs, and reviews code in plain English. Paste any code snippet, select a mode, and get structured feedback streamed back in real time.',
    img: '/projects-1.png',
    iconLists: ['/re.svg', '/ts.svg', '/tail.svg', 'nodejs.svg'],
    link: 'https://code-to-english.vercel.app',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Web Developer',
    company: 'AM/PM Systems',
    thumbnail: '/work-exp-1.png',
    content: (
      <>
        <p>
          Maintained and enhanced all company web applications and websites,
          addressing everything from complex feature development to routine bug
          fixes.
        </p>
        <p>
          Collaborated with other teams to design and implement new web portal
          features tailored to client requirements.
        </p>
        <p>
          Revamped outdated websites by creating new modern and responsive
          themes for improved user experience.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Software Developer',
    company: 'Felix Payment Systems',
    thumbnail: '/work-exp-2.png',
    content: (
      <>
        <p>
          Led the end-to-end design, development, and management of a new
          internal web application project.
        </p>
        <p>
          Architected a full-stack system with a React UI and a RESTful API
          built using Node.js and TypeScript.
        </p>
        <p>
          Managed team sprints and tasks in an Agile development cycle,
          consistently completing 2-3 major tickets per sprint.
        </p>
        <p>
          Regularly demoed sprint progress to the CTO and stakeholders, leading
          to MVP approval and deployment.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Co-op at Porton Health',
    thumbnail: '/work-exp-3.png',
    content: (
      <>
        <p>
          Built new features for a patient booking system integrated with an
          electronic medical record (EMR) API.
        </p>
        <p>
          Implemented complete UI/UX redesign based on Figma screens, gaining
          proficiency in React + Node.js.
        </p>
        <p>
          Refactored mongoose schemas and updated related MongoDB documents to
          support new data structures.
        </p>
        <p>
          Resolved 4-6 bugs per sprint, significantly enhancing application
          stability, usability, and overall product quality.
        </p>
      </>
    ),
  },
];

export const socialMedia = [
  {
    id: 1,
    name: 'Github',
    img: '/git.svg',
    link: 'https://github.com/vtran95',
  },
  {
    id: 2,
    name: 'LinkedIn',
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/vincent-tran11/',
  },
];
