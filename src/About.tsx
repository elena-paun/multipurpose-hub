'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from './styles';
import { fadeIn, textVariant } from './utils/motion';
import { SectionWrapper } from './hoc';
import VerticalStepper from './components/VerticalStepper';

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const About = () => {
  return (
    <motion.div id='projects' variants={textVariant()}>
      <div className='h-screen grid grid-cols-8 grid-rows-5 flex flex-col lg:flex-row gap-6'>
        {/* <div className={styles.sectionHeadText}>ABOUT ME</div> */}
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <div className='flex  flex-col justify-around col-start-2 lg:col-start-3 row-start-2 col-span-2 row-span-2'>
          {/* <img
            width={300}
            height={300}
            src={'/hero/hero.png'}
            alt='avatar'
            className='rounded-full'
          /> */}
          <div className='text-5xl flex text-beige h-full'>Elena Valach</div>
          <div className='text-xl flex text-beige h-full'>
            Software Developer
          </div>
          <div className='text-md flex text-beige h-full'>
            <a href='#about'>About</a>
          </div>
          <div className='text-md flex text-beige h-full'>
            <a href='#experience'>Experience</a>
          </div>
          <div className='active:border-b-red text-md flex flex-col text-beige h-full'>
            <a href='#projects'>Projects</a>
          </div>
        </div>

        <div className='col-start-2 lg:col-start-5 row-start-3 lg:row-start-2 col-span-3 text-justify lg:col-span-2 text-secondary text-[14px] leading-normal '>
          <p className='text-beige font-bold'>ABOUT</p>
          <p>
            I'm a passionate Front-End Developer with a creative twist. I'm
            driven by a love for clean code, responsive design, and staying at
            the forefront of technology trends. My goal is to make the web a
            more beautiful and accessible place for users. I'm a painter,
            drawer, and illustrator, and my art reflects my diverse interests
            and influences. Whether it's capturing the beauty of nature,
            exploring abstract concepts, or telling visual stories, my artwork
            is a reflection of my creative spirit. Combining my technical skills
            with my passion for art allows me to approach problems with a unique
            perspective, blending aesthetics with functionality.
          </p>
          <br />
        </div>
        {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, 'section-wrapper-main');
