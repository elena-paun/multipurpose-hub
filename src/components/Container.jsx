import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { About, Hero, Navbar, Projects, Typewriter } from '.';
import { textVariant } from '../utils/motion';
import { ImageEraser } from './ImageEraser';
import { navLinks } from '../constants';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import PhotoAlbum from 'react-photo-album';
import photos from './photos';

const Container = () => {
  const [isJiggling, setIsJiggling] = useState(false);
  const toggleJiggle = () => {
    setIsJiggling(!isJiggling);
  };

  const [category, setCategory] = useState('about');
  const handleCategory = (value) => {
    setCategory(value);
  };
  return (
    <div className='absolute w-full flex flex-col md:flex-row gap-y-32 md:gap-x-40'>
      <div id='about'></div>
      <div className='fixed w-full h-1 bg-red' />
      <div className='top-1/4 relative md:fixed flex flex-col gap-2 row-start-2'>
        <div className=' font-abril mx-8 text-4xl text-beige overflow-hidden'>
          Elena Valach
        </div>
        <div className=' font-abril mx-8 text-lg text-beige overflow-hidden'>
          software developer · illustrator
        </div>
      </div>
      <div className='hidden md:flex md:flex-col fixed top-1/2 left-0 m-8 z-[1] cursor-pointer text-beige'>
        <a
          href='#about'
          className={`group flex items-center py-3`}
          onClick={() => handleCategory('about')}>
          <span
            className={`${
              category === 'about' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-500'
            } bg-white mr-4 h-px bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
          <span
            className={`${
              category === 'about' ? 'text-slate-200' : 'text-slate-500'
            } nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
            About
          </span>
        </a>
        <a
          href='#projects'
          className={`group flex items-center py-3 border-b-none`}
          onClick={() => handleCategory('projects')}>
          <span
            className={`${
              category === 'projects' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-500'
            } bg-white mr-4 h-px bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
          <span
            className={`${
              category === 'projects' ? 'text-slate-200' : 'text-slate-500'
            } nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
            Projects
          </span>
        </a>
        <a
          className={`group flex items-center py-3`}
          onClick={() => handleCategory('experience')}>
          <span
            className={`${
              category === 'experience'
                ? 'w-16 bg-slate-200'
                : 'w-8 bg-slate-500'
            } bg-white mr-4 h-px bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
          <span
            className={`${
              category === 'experience' ? 'text-slate-200' : 'text-slate-500'
            } nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
            Experience
          </span>
        </a>
      </div>
      <div className='flex flex-col ml-0 md:ml-40 px-12'>
        <div className='mt-0 md:mt-52 w-full'>
          <div className='md:left-12 md:w-[80%] leading-relaxed relative text-justify text-beige'>
            I'm a passionate Front-End Developer with a creative twist. I'm
            driven by a love for clean code, responsive design, and staying at
            the forefront of technology trends.
            <br />
            <br />
            My goal is to make the web a more beautiful and accessible place for
            users. I'm a painter, drawer, and illustrator, and my art reflects
            my diverse interests and influences. Whether it's capturing the
            beauty of nature, exploring abstract concepts, or telling visual
            stories, my artwork is a reflection of my creative spirit.
            <br />
            <br />
            Combining my technical skills with my passion for art allows me to
            approach problems with a unique perspective, blending aesthetics
            with functionality.
          </div>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Container, 'section-wrapper-main');
