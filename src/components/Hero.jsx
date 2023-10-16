'use client';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = ({ theme }) => {
  return (
    <section>
      {/* <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}> */}
      {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}
      {/* <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Adrian</span>
          </h1> */}
      {/* <div
        className={`${styles.heroSubText} right-[17px] w-full justify-center flex bottom-32 items-center absolute`}>
        <p className='text-sm text-white dark:text-white'>web developer</p>
        <svg
          width='50'
          height='50'
          xmlns='http://www.w3.org/2000/svg'
          className='border-solid border-white'
          onClick={() => handleStepClick(step.id)}>
          <circle
            cx='25'
            cy='25'
            r='3'
            fill={theme === 'dark' ? '#f3f3f3' : '#5d73a3'}
          />{' '}
        </svg>
        <p className='text-sm text-white dark:text-white'>illustrator</p>
      </div> */}
      {/* </div> */}
      <a href='#about'>
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <div className='w-[35px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
