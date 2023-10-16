import React from 'react';

const Moon = ({ stroke }) => (
  <svg
    id='Layer_1'
    xmlns='http://www.w3.org/2000/svg'
    width='.28in'
    height='.28in'
    viewBox='0 0 20 20'>
    <g id='moon'>
      <path
        d='M9,2.9c-2,0-3.8,.8-5.2,2.2,.7-.3,1.4-.5,2.1-.5,3,.1,5.3,2.7,5.2,5.6-.1,2.9-2.4,5.1-5.2,5.2-.7,0-1.5-.2-2.1-.5,2.8,2.9,7.3,2.9,10.1,.2s3-7.3,.3-10.1c-1.4-1.3-3.3-2.2-5.2-2.1h0Z'
        fill='none'
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'></path>
    </g>
  </svg>
);

export default Moon;
