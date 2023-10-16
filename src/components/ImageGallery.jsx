import React, { useState, useRef } from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]); // Initially selecting the first image
  const galleryRef = useRef(null);
  let intervalId = null;

  const handleStartScrolling = (direction) => {
    intervalId = setInterval(() => {
      const { scrollTop, scrollHeight, clientHeight } = galleryRef.current;
      if (direction === 'up' && scrollTop > 0) {
        galleryRef.current.scrollTop -= 10;
      } else if (
        direction === 'down' &&
        scrollTop < scrollHeight - clientHeight
      ) {
        galleryRef.current.scrollTop += 10;
      }
    }, 50);
  };

  const handleStopScrolling = () => {
    clearInterval(intervalId);
  };

  return (
    <div
      ref={galleryRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '400px',
        overflow: 'auto',
      }}
      onMouseLeave={handleStopScrolling}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`gallery-image-${index}`}
          style={{
            border:
              selectedImage === image
                ? '2px solid red'
                : '2px solid transparent', // Highlighting the selected image
            margin: '10px',
            width: '200px',
            height: '200px',
            cursor: 'pointer',
          }}
          onClick={() => setSelectedImage(image)}
        />
      ))}
      <div
        style={{ marginTop: '20px' }}
        onMouseEnter={() => handleStartScrolling('up')}
        onMouseLeave={handleStopScrolling}>
        ^ Hover here to scroll up ^
      </div>
      <div
        style={{ marginBottom: '20px' }}
        onMouseEnter={() => handleStartScrolling('down')}
        onMouseLeave={handleStopScrolling}>
        v Hover here to scroll down v
      </div>
      <div>
        <p>Selected Image:</p>
        <img
          src={selectedImage}
          alt='selected'
          style={{ width: '300px', height: '300px' }}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
