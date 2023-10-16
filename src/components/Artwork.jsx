import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import photos from './photos';
import PhotoAlbum from 'react-photo-album';
import { app } from '../../firebase';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';

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

export const Artwork = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.theme);
  const [active, setActive] = useState(location.hash);
  console.log({ active });
  const handleStepClick = (step) => {
    setActive(step);
    navigate(`#${step}`);
  };

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
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Access Firestore using the initialized app
    const db = getFirestore(app);

    // Reference the "images" collection
    const imagesCollection = collection(db, 'images');

    // Listen for changes in the "images" collection
    const unsubscribe = onSnapshot(imagesCollection, (snapshot) => {
      const imageArray = [];
      snapshot.forEach((doc) => {
        console.log({ snapshot });
        imageArray.push({ id: doc.id, ...doc.data() });
      });
      setImages(imageArray);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);
  console.log('artwork', images);
  return (
    <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className='section-wrapper-artwork'>
      <div className='my-20' onClick={() => navigate('/')}>
        <img
          src='src/assets/circle_scribble.png'
          width='10%'
          alt='img'
          className='relative left-1/2 transform -translate-x-1/2'
        />
        {/* <img
          src='src/assets/scribble_2.png'
          width='10%'
          alt='img'
          className='w-96 relative left-1/2 transform -translate-x-1/2'
        /> */}
      </div>
      <PhotoAlbum
        photos={photos(images)}
        layout='columns'
        targetRowHeight={100}
        spacing={5}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 800) return 2;
          return 3;
        }}
      />
    </motion.div>
  );
};

export default SectionWrapper(Artwork);
