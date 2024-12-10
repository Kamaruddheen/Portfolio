import {
  FaReact,
  FaPython,
  FaNode,
  FaBootstrap,
  FaChartLine,
  FaHtml5,
  FaCss3Alt,
  FaSass,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import { BiLogoFirebase } from 'react-icons/bi';
import { BiLogoJquery } from 'react-icons/bi';
import { DiDjango } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';

export const projectsData = [
  {
    title: 'WorkoutWings',
    description:
      'WorkoutWings is an innovative platform designed for individuals who frequently travel and seek flexibility in their fitness routines without committing to long-term gym memberships. The platform allows users to book gym sessions on an hourly basis, offering convenience and affordability.',
    tags: [
      {
        name: 'react',
        icon: FaReact,
      },
      {
        name: 'node',
        icon: FaNode,
      },
      {
        name: 'mongodb',
        icon: SiMongodb,
      },
      {
        name: 'express',
        icon: SiExpress,
      },
      {
        name: 'TailwindCSS',
        icon: SiTailwindcss,
      },
    ],
    image: '../../src/assets/images/workoutwings.png',
    source_code_link: 'https://github.com/pesto-students/frontend-repo-titans',
    live_demo_link: 'https://workoutwings.vercel.app',
  },
  {
    title: 'Attendance Report',
    description:
      'An automated student attendance and scheduling platform for colleges. Intelligently generates timetables and tracks attendance records digitally for better analytics. Modern interface across all user levels for easy adoption.',
    tags: [
      {
        name: 'python',
        icon: FaPython,
      },
      {
        name: 'bootstrap',
        icon: FaBootstrap,
      },
      {
        name: 'Django',
        icon: DiDjango,
      },
      {
        name: 'jQuery',
        icon: BiLogoJquery,
      },
      {
        name: 'chart.js',
        icon: FaChartLine,
      },
      {
        name: 'HTML',
        icon: FaHtml5,
      },
      {
        name: 'CSS',
        icon: FaCss3Alt,
      },
      {
        name: 'sass',
        icon: FaSass,
      },
    ],
    image: 'https://placehold.co/600x400',
    source_code_link: 'https://github.com/Kamaruddheen/attendance-report',
    live_demo_link: 'https://demo.com',
  },
  {
    title: 'Crown Clothing',
    description:
      'Developed a full-stack e-commerce application using React, Redux, and Firebase, featuring user authentication, a dynamic product catalog, and a shopping cart system. Implemented state management with Redux to efficiently handle application state and ensure a seamless user experience.',
    tags: [
      {
        name: 'react',
        icon: FaReact,
      },
      {
        name: 'redux',
        icon: SiRedux,
      },
      {
        name: 'firebase',
        icon: BiLogoFirebase,
      },
    ],
    image: '../../src/assets/images/crwn-clothing.png',
    source_code_link: 'https://github.com/Kamaruddheen/crwn-clothing',
    live_demo_link: 'https://crwn-clothing-drab.vercel.app/',
  },
];
