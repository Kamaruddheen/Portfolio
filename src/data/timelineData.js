import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export const timelineData = [
  {
    title: 'Pesto Fellowship',
    subtitle: 'Full Stack Development and Product Engineering',
    date: 'Oct 2023 - Sep 2024',
    description:
      'Completed a Full Stack Development and Product Engineering program at Pesto Tech, gaining expertise in the MERN stack (MongoDB, Express.js, React, Node.js). Experienced in building and deploying scalable applications, ready to contribute to product engineering teams',
    icon: FaGraduationCap,
    type: 'education',
  },
  {
    title: 'Senior System Associate',
    subtitle: 'Infosys',
    date: 'Dec 2021 - Dec 2023',
    description:
      'Worked as a Senior System Associate, contributing to enterprise-level software solutions',
    icon: FaBriefcase,
    type: 'work',
  },
  {
    title: 'BSc Computer Science',
    subtitle: 'PSG College of Arts and Science',
    date: 'Jun 2018 - Jul 2021',
    description:
      "Completed Bachelor's degree in Computer Science with focus on core programming concepts and software development",
    icon: FaGraduationCap,
    type: 'education',
  },
  {
    title: 'Advanced Programme in Full Stack Software Engineering',
    subtitle: 'NIIT',
    date: 'Dec 2019 - Sep 2020',
    description:
      'Specialized training in full stack development, covering both front-end and back-end technologies',
    icon: FaGraduationCap,
    type: 'education',
  },
  {
    title: 'Python Developer',
    subtitle: 'NBS Digital Technologies',
    date: 'Nov 2019 - Dec 2019',
    description:
      'Internship focused on Python development, gaining practical experience in software development',
    icon: FaBriefcase,
    type: 'work',
  },
].sort(
  (a, b) => new Date(b.date.split(' - ')[0]) - new Date(a.date.split(' - ')[0])
);
