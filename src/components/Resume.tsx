import React from 'react';
import { SectionWrapper } from '../hoc';

const Resume = () => {
  return (
    <div id='resume' className='flex flex-col gap-6'>
      <div className='flex flex-col items-center py-8'>
        <div className='relative gap-6 flex flex-col'>
          {/* University Studies */}
          <div className='w-12 h-12 border-solid border-2 border-white rounded-full flex items-center justify-center'>
            <i className='fa fa-sharp fa-solid fa-graduation-cap fa-lg'></i>{' '}
          </div>
          {/* <div className='relative left-1/2 transform -translate-x-1/2  h-6 w-1 bg-white'></div> */}
          {/* Job */}
          <div className='w-12 h-12 border-solid border-2 border-white rounded-full flex items-center justify-center'>
            <i className='fa fas fa-briefcase fa-lg'></i>
          </div>
          {/* <div className='relative left-1/2 transform -translate-x-1/2 h-6 w-1 bg-white'></div> */}
          <div className='w-12 h-12 border-solid border-2 border-white rounded-full flex items-center justify-center'>
            <i className='fa fas fa-briefcase fa-lg text-white'></i>
          </div>
          {/* <div className='relative left-1/2 transform -translate-x-1/2  h-6 w-1 bg-white'></div> */}
          <div className='w-12 h-12 border-solid border-2 border-white rounded-full flex items-center justify-center'>
            <i className='fa fas fa-briefcase fa-lg'></i>
          </div>
          {/* <div className='relative left-1/2 transform -translate-x-1/2  h-6 w-1 bg-white'></div> */}
          <div className='w-12 h-12 border-solid border-2 border-white rounded-full flex items-center justify-center'>
            <i className='fa fas fa-briefcase fa-lg'></i>
          </div>
          {/* <div className='relative left-1/2 transform -translate-x-1/2  h-6 w-1 bg-white'></div> */}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, 'resume');
