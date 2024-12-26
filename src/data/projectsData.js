import {
  FaReact,
  FaPython,
  FaNode,
  FaBootstrap,
  FaChartLine,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";
import { BiLogoJquery } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { SiRedux } from "react-icons/si";

import thumbnail from "../assets/images/thumbnails/project.svg";
import workoutwings_thumbnail from "../assets/images/thumbnails/workoutwings.png";
import crownclothing_thumbnail from "../assets/images/thumbnails/crwn-clothing.png";
import attendance_thumbnail from "../assets/images/thumbnails/attendance.png";
import weather_thumbnail from "../assets/images/thumbnails/weather.png";
import age_calculator_thumbnail from "../assets/images/thumbnails/age-calculator.png";
import theme_toggler_thumbnail from "../assets/images/thumbnails/theme-toggler.png";

export const projectsData = [
  {
    title: "WorkoutWings",
    description:
      "WorkoutWings is an innovative platform designed for individuals who frequently travel and seek flexibility in their fitness routines without committing to long-term gym memberships. The platform allows users to book gym sessions on an hourly basis, offering convenience and affordability.",
    tags: [
      {
        name: "react",
        icon: FaReact,
      },
      {
        name: "node",
        icon: FaNode,
      },
      {
        name: "mongodb",
        icon: SiMongodb,
      },
      {
        name: "express",
        icon: SiExpress,
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
    ],
    image: workoutwings_thumbnail,
    source_code_link: "https://github.com/pesto-students/frontend-repo-titans",
    live_demo_link: "https://workoutwings.vercel.app",
  },
  {
    title: "Attendance Report",
    description:
      "An automated student attendance and scheduling platform for colleges. Intelligently generates timetables and tracks attendance records digitally for better analytics. Modern interface across all user levels for easy adoption.",
    tags: [
      {
        name: "python",
        icon: FaPython,
      },
      {
        name: "bootstrap",
        icon: FaBootstrap,
      },
      {
        name: "Django",
        icon: DiDjango,
      },
      {
        name: "jQuery",
        icon: BiLogoJquery,
      },
      {
        name: "chart.js",
        icon: FaChartLine,
      },
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
      },
      {
        name: "sass",
        icon: FaSass,
      },
    ],
    image: attendance_thumbnail,
    source_code_link: "https://github.com/Kamaruddheen/attendance-report",
    live_demo_link: "https://demo.com",
  },
  {
    title: "Crown Clothing",
    description:
      "Developed a full-stack e-commerce application using React, Redux, and Firebase, featuring user authentication, a dynamic product catalog, and a shopping cart system. Implemented state management with Redux to efficiently handle application state and ensure a seamless user experience.",
    tags: [
      {
        name: "react",
        icon: FaReact,
      },
      {
        name: "redux",
        icon: SiRedux,
      },
      {
        name: "firebase",
        icon: BiLogoFirebase,
      },
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
      },
    ],
    image: crownclothing_thumbnail,
    source_code_link: "https://github.com/Kamaruddheen/crwn-clothing",
    live_demo_link: "https://crwn-clothing-drab.vercel.app/",
  },
  {
    title: "Weather",
    description:
      "A React app that fetches and displays current weather data for a city using the OpenWeatherMap API.",
    tags: [
      {
        name: "react",
        icon: FaReact,
      },
      {
        name: "Javascript",
        icon: FaJs,
      },
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
      },
    ],
    image: weather_thumbnail,
    source_code_link: "https://github.com/Kamaruddheen/weather",
    live_demo_link: "https://weather-celsius.vercel.app",
  },
  {
    title: "Age Calculator",
    description:
      "An age calculator is a user-friendly tool that allows the user to accurately determine a person's age by inputting their date of birth.",
    tags: [
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
      },
      {
        name: "Javascript",
        icon: FaJs,
      },
    ],
    image: age_calculator_thumbnail,
    source_code_link: "https://github.com/Kamaruddheen/age-calculator",
    live_demo_link: "https://age-magic.vercel.app",
  },
  {
    title: "Theme Toggler",
    description:
      "Theme Toggler is a simple React application that allows users to switch between light and dark themes.",
    tags: [
      {
        name: "react",
        icon: FaReact,
      },
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
      },
      {
        name: "Javascript",
        icon: FaJs,
      },
    ],
    image: theme_toggler_thumbnail,
    source_code_link: "https://github.com/Kamaruddheen/theme-toggler",
    live_demo_link: "https://theme-toggler-two.vercel.app",
  },
];

// image: "https://placehold.co/600x400",
