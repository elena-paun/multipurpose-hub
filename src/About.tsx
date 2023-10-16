'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from './styles';
import { fadeIn, textVariant } from './utils/motion';
import { SectionWrapper } from './hoc';

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
    <div id='about' className='flex flex-col gap-6'>
      <motion.div variants={textVariant()}>
        {/* <div className={styles.sectionHeadText}>ABOUT ME</div> */}
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
      </motion.div>
      <div className='grid grid-cols-2 grid-flow-col justify-around'>
        <img
          width={300}
          height={300}
          src={'/hero/hero.png'}
          alt='avatar'
          className='rounded-full'
        />
        <div className='mt-4 text-[14px] leading-tight w-80  gap-10 flex flex-col'>
          <div className='flex flex-col gap-2'>
            <div className={styles.sectionSubText}>FULL NAME</div>
            <div>Elena Valach</div>
          </div>
          <div className='flex flex-col'>
            <div className={styles.sectionSubText}>E-MAIL</div>
            <div>noblankpaper13@gmail.com</div>
          </div>
          <div className='flex flex-col'>
            <div className={styles.sectionSubText}>GITHUB</div>
            <a href='https://github.com/elena-paun'>
              https://github.com/elena-paun
            </a>
          </div>
        </div>
        {/* <VerticalStepper steps={steps} /> */}
      </div>
      <div className='mt-4 text-secondary text-[14px] leading-tight '>
        &nbsp; I'm a passionate Front-End Developer with a creative twist. I'm
        driven by a love for clean code, responsive design, and staying at the
        forefront of technology trends. My goal is to make the web a more
        beautiful and accessible place for users. I'm a painter, drawer, and
        illustrator, and my art reflects my diverse interests and influences.
        Whether it's capturing the beauty of nature, exploring abstract
        concepts, or telling visual stories, my artwork is a reflection of my
        creative spirit. Combining my technical skills with my passion for art
        allows me to approach problems with a unique perspective, blending
        aesthetics with functionality.
        <br />
      </div>
      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, 'about');
