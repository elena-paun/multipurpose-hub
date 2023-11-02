import React from 'react';
import { motion } from 'framer-motion';

import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Card = ({ title, description, tech }) => {
  return (
    <div className='w-[40rem] group md:px-8 py-8 relative grid pb-1 transition-all sm:gap-8 md:gap-4 md:hover:!opacity-100 md:group-hover/list:opacity-50'>
      {/* <div className='group flex justify-center items-center col-start-4 col-span-3 row-start-3 row-span-3'> */}
      <div className='relative block -inset-x-4 -inset-y-4 z-0  rounded-md transition motion-reduce:transition-none md:-inset-x-6 md:block md:group-hover:bg-[rgb(51,48,65)]/50 md:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] md:group-hover:drop-shadow-lg'>
        <div className='px-6 py-4'>
          <div className='inline-flex items-baseline font-medium text-[rgb(253,186,116)] md:group-hover:!text-[rgb(254,215,170)]	 focus-visible:text-[rgb(254,215,170)]	  group/link text-base'>
            {title}
          </div>
          <p className='text-sm text-gray-200'>{description}</p>
        </div>
        <div className='px-6 py-4'>
          {tech.map((t) => (
            <span
              key={t}
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
              {t}
            </span>
          ))}
          {/* <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #react
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
                #next.js
              </span> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
