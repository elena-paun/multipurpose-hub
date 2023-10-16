'use client';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../index.css';
import { navLinks } from '../constants';
import Moon from '../assets/Moon';
import Sun from '../assets/Sun';
import Close from '../assets/Close';
import Menu from '../assets/Menu';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 100) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  //   // document.documentElement.classList.add(theme);
  //   if (
  //     theme === 'dark' ||
  //     (!('theme' in localStorage) &&
  //       window.matchMedia('(prefers-color-scheme: dark)').matches)
  //   ) {
  //     document.documentElement.setAttribute('data-user-color-scheme', 'dark');
  //   } else {
  //     document.documentElement.setAttribute('data-user-color-scheme', 'light');
  //   }
  // }, [theme]);
  // const toggleDarkMode = () => {
  //   // document.documentElement.classList.toggle('dark-theme');

  //   setTheme((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  // };
  // const handleNavigate = (page) => {
  //   navigate(`#${page}`);
  //   setActive(page);
  // };
  const navigate = useNavigate();
  return (
    <>
      {/* <div className='items-stretch flex gap-px left-0 absolute bg-transparent'> */}
      {/* </div> */}
      {/* <nav className='hidden overflow-hidden bg-darkBlue z-[1] col-start-1 col-span-1 float-left h-screen justify-end right-0 top-0 fixed md:flex gap-0'>
        <Link
          to='/'
          className='gap-10'
          onClick={() => {
            console.log('click');
            window.scrollTo(0, 0);
          }}>
          <div className='relative border-black border-2 font-bebas text-xl block m-8 overflow-hidden'>
            <div className='spiral'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
              EV
            </div>
          </div>

        </Link>

        <div className='flex gap-10 m-8'>
          {navLinks.map((nav) => (
            <Link
              key={nav.id}
              to='gallery'
              className={`font-mono tracking-tight font-bolder block text-xl text-beige bg-transparent dark:text-dark`}>
              {nav.title}
            </Link>
          ))}
        </div>
        <div className='right-0 w-[1px] vertical-lr block bg-stone-700 h-screen absolute' />
        <div className='right-0 w-[5px] vertical-lr block bg-orange h-[10rem] absolute' />
      </nav> */}
      <nav className='hidden bg-transparent z-[1] col-start-1 col-span-1 float-left h-screen justify-end left-0 top-0 fixed md:flex flex-col gap-0'>
        {/* <nav className='float-right border-b-2 border-b-black bg-transparent w-full hidden md:flex rotate-90 -right-[23rem] justify-end flex-row right-0 fixed gap-10 col-span-3'> */}
        <Link
          to='/'
          className='gap-10'
          onClick={() => {
            console.log('click');
            window.scrollTo(0, 0);
          }}>
          <div className='relative border-black border-2 font-bebas text-xl block m-8 overflow-hidden'>
            <div className='spiral'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
              EV
            </div>
          </div>
          {/* <img
            src='src/assets/scribble_2.png'
            width='1%'
            alt='img'
            className='w-20  absolute top-1  left-1/2 transform -translate-x-1/2'
          /> */}
        </Link>

        <div className='gap-20 flex flex-col m-8'>
          {navLinks.map((nav) => (
            <Link
              key={nav.id}
              // href={`${nav.id}`}
              to='gallery'
              // onClick={(e) => navigate('gallery')}
              className={`font-mono tracking-tight font-bolder block vertical-lr rotate-180 text-cormorant text-beige bg-transparent dark:text-dark`}>
              {nav.title}
            </Link>
          ))}
        </div>
        <div className='right-0 w-[1px] vertical-lr block bg-stone-700 h-screen absolute' />
        <div className='right-0 w-[5px] vertical-lr block bg-orange h-[10rem] absolute' />
      </nav>
      <nav className='flex md:hidden bg-grey'>
        <div className='fixed  right-0 z-20 flex-1 justify-end items-center col-end-7 col-span-2 p-7 bg-transparent'>
          {/* <img
            src={toggle ? 'src/assets/Close.ts' : menn}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
          /> */}
          {toggle ? (
            <Close fill={'black'} onClick={() => setToggle(!toggle)} />
          ) : (
            <Menu fill={'white'} onClick={() => setToggle(!toggle)} />
          )}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } w-full p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='items-center list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setToggle(!toggle);
                    handleNavigate(nav.id);
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
//  <nav
//    className={`pointer-events-none grid gap-px grid-cols-6 lg:grid-cols-6 items-center w-full fixed top-0 z-20
//         `}>
//    {/* <Link
//           to='/'
//           className='pointer-events-none flex items-center gap-2 relative p-5 col-start-1 col-end-3 '
//           onClick={() => {
//             console.log('click');
//             setActive('');
//             window.scrollTo(0, 0);
//           }}
//           onFocus={() => console.log('focus')}>
//           <div className='rounded-full leading-4 relative bg-white left-0  text-4xl text-black font-bold cursor-pointer flex font-bebas p-5'>
//             E
//           </div>
//         </Link> */}

//    {/* </div> */}
//    {/* <div className='flex p-5 justify-center h-full items-center col-span-1 lg:col-span-1 '>
//             {theme === 'dark' ? (
//               <Moon stroke='#ffb39b' />
//             ) : (
//               <Sun stroke='#5d73a3' />
//             )}
//             <button
//               className='font-manrope text-sm text-light dark:text-dark'
//               onClick={toggleDarkMode}>
//               &nbsp; MODE
//             </button>
//           </div> */}
//    <div className='flex md:hidden fixed  right-0 z-20 flex-1 justify-end items-center col-end-7 col-span-2 p-7 bg-transparent'>
//      {/* <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain'
//           /> */}
//      {toggle ? (
//        <Close
//          fill={theme === 'dark' ? 'black' : 'black'}
//          onClick={() => setToggle(!toggle)}
//        />
//      ) : (
//        <Menu
//          fill={theme === 'dark' ? 'white' : 'white'}
//          onClick={() => setToggle(!toggle)}
//        />
//      )}
//      <div
//        className={`${
//          !toggle ? 'hidden' : 'flex'
//        } w-full p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
//        <ul className='items-center list-none flex justify-end items-start flex-1 flex-col gap-4'>
//          {navLinks.map((nav) => (
//            <li
//              key={nav.id}
//              className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                active === nav.title ? 'text-white ' : 'text-secondary'
//              }`}
//              onClick={() => {
//                setToggle(!toggle);
//                handleNavigate(nav.id);
//              }}>
//              <a href={`#${nav.id}`}>{nav.title}</a>
//            </li>
//          ))}
//        </ul>
//      </div>
//    </div>
//    {/* </div> */}
//  </nav>;
