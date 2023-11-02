'use client';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

import './index.css';

import { BrowserRouter, Outlet, useLocation } from 'react-router-dom';
import { app } from '../firebase';
import Container from './components/Container';
import About from './About';
import Resume from './components/Resume';
import SquareGrid from './components/SquareGrid';
import AnimatedCursor from 'react-animated-cursor';
import { Contact, Navbar, Artwork, ImageGallery, Projects } from './components';
import PhotoAlbum from 'react-photo-album';
import photos from './components/photos';

interface Image {
  [fieldKey: string]: string;
}

const App = () => {
  console.log('app');
  const images = [
    'src/assets/hero/background.png',
    'src/assets/hero/background.png',
    'src/assets/hero/background.png',
    'src/assets/hero/background.png',
    // Add more image URLs here as needed
  ];
  // const location = useLocation();
  // const [active, setActive] = useState('');

  //  const [images, setImages] = useState<Image[]>([]);

  //   useEffect(() => {
  //     // Access Firestore using the initialized app
  //     const db = getFirestore(app);

  //     // Reference the "images" collection
  //     const imagesCollection = collection(db, 'images');

  //     // Listen for changes in the "images" collection
  //     const unsubscribe = onSnapshot(imagesCollection, (snapshot) => {
  //       const imageArray = [];
  //       snapshot.forEach((doc) => {
  //         console.log({ snapshot });
  //         imageArray.push({ id: doc.id, ...doc.data() });
  //       });
  //       setImages(imageArray);
  //     });

  //     // Clean up the listener when the component unmounts
  //     return () => unsubscribe();
  //   }, []);

  // const steps = [...navLinks]; // Add your step labels here
  // const [activeStep, setActiveStep] = useState(0);

  // const handleStepClick = (stepIndex) => {
  //   setActive(stepIndex);
  // };
  useEffect(() => {
    document.addEventListener('mousemove', function (e) {
      const cursorEffect = document.getElementById(
        'cursor-effect'
      ) as HTMLElement;
      const x = e.clientX;
      const y = e.clientY;
      cursorEffect.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    });
  }, []);
  return (
    <div className='grid grid-cols-2 grid-flow-col grid-rows-2'>
      <div
        id='cursor-effect'
        className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
      />
      {/* <Navbar /> */}
      <Container />

      {/* <Artwork /> */}
      {/* <Contact /> */}

      {/* <ImageGallery images={images} /> */}
      {/* <Navbar setActive={setActive} active={active} />
      <VerticalStepper steps={steps} handleStepClick={handleStepClick} /> */}
      {/* <About />
      <Resume />
      <SquareGrid /> */}
      {/* <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div> */}
    </div>
  );
};
// const container = document.getElementById('root');
export default App;
// ReactDOM.render(
//   <React.StrictMode>
//     <div className='container'>
//       <App />
//     </div>
//   </React.StrictMode>,
//   container
// );
