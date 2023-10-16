import React from 'react';

const SquareGrid: React.FC = () => {
  // Create an array of 30 square elements
  const squares = Array.from({ length: 30 }, (_, i) => (
    <div key={i} className='p-2'>
      <div className='bg-gray-300 w-40 h-40'></div>
    </div>
  ));

  return <div className='grid grid-cols-3 gap-4 p-10'>{squares}</div>;
};

export default SquareGrid;
