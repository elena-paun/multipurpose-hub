import React, { useEffect, useRef, useState } from 'react';
import { navLinks } from '../constants';

import { About, Hero, Navbar, Typewriter } from '.';
import { useLocation, useNavigate } from 'react-router-dom';
import { ImageEraser } from './ImageEraser';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import PhotoAlbum from 'react-photo-album';
import photos from './photos';

// const init = function () {
//   const canvasContainer = document.getElementById('blob-canvas'); // Get the "blob-canvas" div
//   const canvas = document.createElement('canvas');
//   canvas.setAttribute('touch-action', 'none');

//   // Append the existing canvas to the "blob-canvas" div
//   canvasContainer?.appendChild(canvas);

//   // ... Rest of your init function ...

//   blob.canvas = canvas;
//   blob.init();
//   blob.render();
// };

const Container = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.theme);
  const [active, setActive] = useState(location.hash);
  console.log({ active });
  const handleStepClick = (step) => {
    setActive(step);
    navigate(`#${step}`);
  };
  const images = [
    { src: 'https://picsum.photos/id/1018/1920/1080/', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1015/1920/1080/', aspect_ratio: 16 / 9 },
  ];
  const widths = [500, 1000, 1600];
  const ratios = [2.2, 4, 6, 8];
  // blob = new Blob();
  // // blob.canvas = canvas; // Assign the canvas here
  // blob.init();
  // blob.render();

  // Cleanup on unmount
  // return () => {
  //   blob = null;
  // };
  const [isJiggling, setIsJiggling] = useState(false);
  // useEffect(() => {
  //   init();
  // }, []);
  const toggleJiggle = () => {
    setIsJiggling(!isJiggling);
  };

  //   return (
  //     <section id='first-section'>
  //       <div className='h-screen w-1/2 md:w-full -z-2 absolute'>
  //         <div class='pointer-events-none ship float-ease-out absolute z-50 mix-blend-exclusion right-0 top-16'></div>
  //         <div className='pointer-events-none grid grid-rows-1 grid-cols-9 relative top-[18rem] items-center'>
  //           <svg
  //             version='1.1'
  //             xmlns='http://www.w3.org/2000/svg'
  //             viewBox='0 0 500 500'
  //             id='world-svg'
  //             fill='rgb(43	39	46	)'
  //             style={{ opacity: 1 }}
  //             className='blur pointer-events-none	col-start-5 -left-[6rem] w-[20rem] z-10 bg-transparent relative'>
  //             <defs>
  //               <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
  //                 <stop offset='0%' style={{ stopColor: 'rgb(0, 0, 0)' }}></stop>
  //                 <stop
  //                   offset='100%'
  //                   style={{ stopColor: 'rgb(0, 0, 0)' }}></stop>
  //               </linearGradient>
  //               <mask id='textMask'>
  //                 <rect width='100%' height='100%' fill='white' />

  //                 <text
  //                   x='50%'
  //                   y='50%'
  //                   dominantBaseline='middle'
  //                   textAnchor='middle'
  //                   className='font-cormorant text-6xl'
  //                   fill='black'>
  //                   <tspan className='font-cheyra'>HELLO</tspan>
  //                   <tspan className='font-cheyra' x='250' dy='1.2em'>
  //                     WORLD
  //                   </tspan>
  //                 </text>
  //               </mask>
  //             </defs>
  //             <path id='blob' mask='url(#textMask)'>
  //               <animate
  //                 attributeName='d'
  //                 dur='25000ms'
  //                 repeatCount='indefinite'
  //                 values='M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z'></animate>
  //             </path>
  //           </svg>
  //         </div>

  //         <div className='hidden md:grid pointer-events-none  w-1/2 md:w-full gap-y-16  grid-rows-4 grid-cols-11 relative -top-[12rem] items-center'>
  //           <div className='z-50 col-start-3 col-span-3  row-span-1 bg-transparent'>
  //             <div className='text-white tracking-wider bg-transparent z-50 col-span-1 row-span-1 text-8xl overflow-hidden font-cheyra '>
  //               ABO
  //             </div>
  //             <div className='relative bg-transparent flex ml-8'>
  //               <div className='w-16 bg-white h-1 mt-12' />
  //               <div className='left-1 ml-6 text-white relative flex tracking-wider bg-transparent z-50 col-span-1 row-span-1 text-8xl overflow-hidden font-cheyra'>
  //                 UT
  //               </div>
  //             </div>
  //             <div className='text-black bg-transparent col-span-2 row-span-1 font-cheyra text-4xl overflow-hidden w-full'>
  //               My name is
  //             </div>
  //           </div>
  //           <div className='retroshadow top-56 z-50 pointer-events-none row-span-1 col-start-3 absolute text-9xl font-bold text-black font-cheyra bg-transparent'>
  //             ELENA <br />{' '}
  //             <p className='absolute text-6xl tracking-[2rem] col-span-3 text-black font-cheyra bg-transparent font-extra-bold'>
  //               VALACH
  //             </p>
  //           </div>
  //           <div className='z-50 bg-transparent col-start-3 text-white absolute col-span-4 row-span-2 top-[33rem]'>
  //             I'm a passionate Front-End Developer with a creative twist. I'm
  //             driven by a love for clean code, responsive design, and staying at
  //             the forefront of technology trends. My goal is to make the web a
  //             more beautiful and accessible place for users. I'm a painter,
  //             drawer, and illustrator, and my art reflects my diverse interests
  //             and influences. Whether it's capturing the beauty of nature,
  //             exploring abstract concepts, or telling visual stories, my artwork
  //             is a reflection of my creative spirit. Combining my technical skills
  //             with my passion for art allows me to approach problems with a unique
  //             perspective, blending aesthetics with functionality.
  //           </div>
  //         </div>
  //       </div>
  //       <div className='left-1/2 w-[1px] block bg-black z-10 h-screen absolute' />
  //       <div className='left-1/2 top-1/2 w-full block bg-black z-10 h-[1px] absolute' />
  //       {/* <div className='left-3/4 w-[1px] block bg-black z-10 h-screen absolute' /> */}

  //       <svg
  //         version='1.1'
  //         xmlns='http://www.w3.org/2000/svg'
  //         viewBox='0 0 500 500'
  //         width='100%'
  //         id='about-svg'
  //         filter='blur(0px)'
  //         className='hidden md:hidden pointer-events-none col-start-5 -left-[12rem] top-[20rem] fixed bottom-0 w-[40rem] z-10 bg-transparent'>
  //         <defs>
  //           <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
  //             <stop offset='0%' style={{ stopColor: 'rgb(0, 0, 0)' }}></stop>
  //             <stop offset='100%' style={{ stopColor: 'rgb(0, 0, 0)' }}></stop>
  //           </linearGradient>
  //         </defs>
  //         <path id='blob' fill='url(#gradient)'>
  //           <animate
  //             attributeName='d'
  //             dur='10s'
  //             repeatCount='indefinite'
  //             values='M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z'></animate>
  //         </path>
  //       </svg>
  //       {/* <svg
  //         version='1.1'
  //         xmlns='http://www.w3.org/2000/svg'
  //         viewBox='0 0 500 500'
  //         width='100%'
  //         id='about-svg-right'
  //         filter='blur(0px)'
  //         className='pointer-events-none col-start-5 right-0 bottom-0 fixed bottom-0 w-[30rem] z-10 bg-transparent'>
  //         <defs>
  //           <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
  //             <stop offset='0%' style={{ stopColor: 'rgb(0, 0, 0)' }}></stop>
  //             <stop offset='100%' style={{ stopColor: 'rgb(0, 0, 0)' }}></stop>
  //           </linearGradient>
  //         </defs>
  //         <path id='blob' fill='url(#gradient)'>
  //           <animate
  //             attributeName='d'
  //             dur='10s'
  //             repeatCount='indefinite'
  //             values='M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z'></animate>
  //         </path>
  //       </svg> */}
  //       {/* <ImageEraser /> */}

  //       <Navbar
  //         setActive={setActive}
  //         active={active}
  //         setTheme={setTheme}
  //         theme={theme}
  //       />
  //       {/* <svg
  //         version='1.1'
  //         xmlns='http://www.w3.org/2000/svg'
  //         viewBox='0 0 500 500'
  //         id='top-svg'
  //         transform='rotate(-58)'
  //         filter='blur(0px)'
  //         className='pointer-events-none absolute top-0 w-[17rem] z-50 bg-transparent'>
  //         <defs>
  //           <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
  //             <stop offset='0%' style={{ stopColor: 'rgb(0, 0, 0)' }}></stop>
  //             <stop offset='100%' style={{ stopColor: 'rgb(0, 0, 0)' }}></stop>
  //           </linearGradient>
  //         </defs>
  //         <path id='blob' fill='url(#gradient)'>
  //           <animate
  //             attributeName='d'
  //             dur='10s'
  //             repeatCount='indefinite'
  //             values='M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z'></animate>
  //         </path>
  //       </svg> */}

  //       {/* <div className='star-field'>
  //         <div className='layer'></div>
  //         <div className='layer'></div>
  //         <div className='layer'></div>
  //         <div className='layer'></div>
  //         <div className='layer'></div>
  //         <div className='layer'></div>
  //       </div>
  //       <div className='shooting-star-container'>
  //         <span className='shooting-star' />
  //       </div> */}
  //     </section>
  //   );
  // };
  useEffect(() => {
    document.addEventListener('mousemove', function (e) {
      const cursorEffect = document.getElementById('cursor-effect');
      const x = e.clientX;
      const y = e.clientY;
      cursorEffect.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    });
  }, []);

  return (
    <>
      <div className=' secondary-bg'></div>
      <div className=' h-screen grid grid-cols-8 grid-rows-6 bg-grey md:bg-darkBlue'>
        <div className='row-start-1 w-full h-1 bg-red absolute z-[1]' />
        <div className='w-full h-1 bg-red absolute z-[1] col-span-8' />
        <div className='sticky  opacity-[0.6]   col-start-6 md:col-start-5 row-start-3 md:row-start-4 col-span-3 row-span-2'>
          <img
            src='src/assets/bird.png'
            width='50%'
            alt='img'
            className='-scale-x-1'
          />
          {/* <div className='grid absolute col-start-4 row-start-1 -top-10'> */}
          {/* <div className='w-24 h-10 top-1 rounded-full bg-red absolute z-[1]' />
            <div className='w-24 h-10 top-16 left-10 rounded-full bg-red absolute z-[1]' />
            <div className='w-24 h-10 top-16 right-0 rounded-full bg-red absolute z-[1]' />
            <div className='w-24 h-10 top-32 rounded-full bg-red absolute z-[1]' />
            <div className='w-5 h-5 left-1/2 top-1 rounded-full bg-red absolute z-[1]' /> */}
        </div>

        {/* <div className='opacity-[0.3] top-32 text-7xl font-cheyra items-center col-start-3 row-start-2 relative -left-10 col-span-2 row-span-1  bg-beige rounded-tl-full rounded-tr-full rounded-br-none rounded-bl-full transition-all duration-300'>
          _HELLO <br />
          WORLD_
        </div> */}
        {/* <p className='hello_world col-start-3 row-start-2'>
          _HELLO <br />
          WORLD_
        </p> */}
        <div
          id='cursor-effect'
          className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
        />
        <div className=' w-[35rem] flex flex-col left-10 sm:left-32 md:left-10 gap-10 relative group-hover:inline-block col-start-2 md:col-start-3 row-start-3 md:row-start-4 row-span-3 col-span-3'>
          <div className='relative'>
            {/* <div className='mix-blend-exclusion md:mix-blend-exclusion text-beige leading-none font-cheyra  w-full text-7xl  self-center  pointer-events-none'>
              Hello! <br />
            </div> */}
            {/* <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>{' '} */}
            <div className='mix-blend-exclusion md:mix-blend-exclusion text-beige leading-none font-cheyra  w-full text-3xl row-span-1 self-center  pointer-events-none'>
              I am <br />
            </div>
            <div className=' mix-blend-exclusion md:mix-blend-exclusion flex col-span-2'>
              <div className='leading-none font-cheyra  w-full col-span-4 text-8xl md:text-8xl lg:text-9xl row-span-4 text-beige pointer-events-none'>
                {/* <Typewriter content='ELENA VALACH' interval={200} /> */}
                ELENA <br />
                VALACH
              </div>
            </div>
          </div>
          <div className=' row-start-6 col-span-5 flex flex-col lg:flex-row gap-4 lg:gap-20'>
            {/* <div className='mix-blend-exclusion md:mix-blend-exclusion leading-normal font-mono font-bold text-beige  text-lg pointer-events-none'>
              welcome to my online space
            </div> */}
            <div className='mix-blend-exclusion md:mix-blend-exclusion leading-normal font-mono font-bold text-beige  text-lg pointer-events-none'>
              software developer
            </div>
            {/* <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>{' '} */}
            <div className='mix-blend-exclusion md:mix-blend-exclusion leading-normal font-mono font-bold text-beige  text-lg pointer-events-none'>
              illustrator
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* <div className='hidden md:flex w-3/4 right-0 h-1 bg-red absolute z-[1] top-3/4' /> */}

        {/* <div className='relative row-start-2 col-start-2 relative p-10 col-span-3 w-64 h-96 bg-grey overflow-visible rounded-tl-full rounded-bl-md rounded-tr-full rounded-br-md hover:rounded-tl-none transition-all duration-300'>
        <div className='absolute row-start-2 col-start-2 col-span-3 absolute w-96 text-justify	mix-blend-exclusion text-beige'>
          I'm a passionate Front-End Developer with a creative twist. With a
          keyboard at one hand and a paintbrush or stylus at the other, I
          navigate the digital and artistic realms with equal enthusiasm.
        </div>
      </div> */}
      </div>
    </>
  );
};

export default SectionWrapper(Container, 'section-wrapper-main');
