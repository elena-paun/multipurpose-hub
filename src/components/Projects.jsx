import React from 'react';
import { motion } from 'framer-motion';

import Card from './Card';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

export const Projects = () => {
  const projects = [
    {
      title: 'Proj1',
      description:
        'This is a modern-looking dark blue card built using Tailwind CSS in React.',
      tech: ['tailwind', 'react', 'Next.js'],
    },
    {
      title: 'Proj2',
      description: 'Description',
      tech: ['tailwind', 'react', 'Next.js'],
    },
    {
      title: 'Proj3',
      description: 'Description',
      tech: ['tailwind', 'react', 'Next.js'],
    },
    {
      title: 'Proj4',
      description: 'Description',
      tech: ['tailwind', 'react', 'Next.js'],
    },
    {
      title: 'Proj5',
      description: 'Description',
      tech: ['tailwind', 'react', 'Next.js'],
    },
    {
      title: 'Proj6',
      description: 'Description',
      tech: ['tailwind', 'react', 'Next.js'],
    },
    {
      title: 'Proj7',
      description: 'Description',
      tech: ['tailwind', 'react', 'Next.js'],
    },
    {
      title: 'Proj8',
      description: 'Description',
      tech: ['tailwind', 'react', 'Next.js'],
    },
    {
      title: 'Proj9',
      description: 'Description',
      tech: ['tailwind', 'react', 'Next.js'],
    },
  ];
  return (
    <motion.div
      id='projects'
      className='relative md:left-6 md:w-[80%] pt-20 gap-y-10 grid  col-start-1 md:col-start-2 col-span-2 '
      variants={textVariant()}>
      <div className='group/list'>
        {/* <div className='h-screen grid grid-cols-8 grid-rows-5 flex flex-col lg:flex-row gap-6'> */}
        {projects.map((proj) => (
          <Card
            title={proj.title}
            key={proj.title}
            description={proj.description}
            tech={proj.tech}
          />
        ))}
      </div>

      {/* </div> */}
    </motion.div>
  );
};
export default Projects;
