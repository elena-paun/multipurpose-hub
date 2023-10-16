import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const VerticalStepper = ({ steps, handleStepClick, fill, active }) => {
  //   const [activeStep, setActiveStep] = useState(0);

  //   const handleStepClick = (stepIndex) => {
  //     setActiveStep(stepIndex);
  //   };
  const location = useLocation();
  console.log({ location });
  return (
    <div className='fixed gap-8 cursor-pointer mt-80 z-20 right-0 flex flex-col stepper'>
      {steps.map((step, index) => (
        <a href={step.id} className='h-4'>
          <svg
            width='50'
            height='50'
            xmlns='http://www.w3.org/2000/svg'
            className='m-10 border-solid border-white'
            onClick={() => handleStepClick(step.id)}>
            {active.includes(step.id) && (
              <circle
                cx='25'
                cy='25'
                r='16'
                stroke={fill}
                stroke-width='1'
                fill='transparent'
              />
            )}
            <circle cx='25' cy='25' r='3' fill={fill} />{' '}
          </svg>
        </a>
      ))}
    </div>
  );
};
export default VerticalStepper;
