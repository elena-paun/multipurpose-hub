import React from 'react';
import photos from './photos';
import PhotoAlbum from 'react-photo-album';
import { Route, Routes } from 'react-router-dom';
import Artwork from './Artwork';

export const Gallery = () => {
  return (
    <Routes>
      <Route element={<Artwork />} path='gallery' />
    </Routes>
  );
};
export default Gallery;
