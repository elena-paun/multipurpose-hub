import React, { useRef, useState, useEffect } from 'react';

export const ImageEraser = () => {
  const [isErasing, setIsErasing] = useState(false);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const previousPointRef = useRef(null);
  const previousTimestampRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    let drawing = false;
    let requestId = null;

    const startDrawing = (e) => {
      console.log({ e });
      drawing = true;
      const x = e.clientX - canvas.getBoundingClientRect().left;
      const y = e.clientY - canvas.getBoundingClientRect().top;
      previousPointRef.current = { x, y };
    };

    const drawLine = (e) => {
      if (!drawing) return;

      const x = e.clientX - canvas.getBoundingClientRect().left;
      const y = e.clientY - canvas.getBoundingClientRect().top;
      ctx.globalCompositeOperation = 'destination-out';

      const cpX = (x + previousPointRef.current.x) / 2;
      const cpY = (y + previousPointRef.current.y) / 2;

      ctx.lineWidth = 150; // Adjust the line width as needed
      ctx.lineCap = 'round';

      requestId = requestAnimationFrame(() => {
        ctx.beginPath();
        ctx.moveTo(previousPointRef.current.x, previousPointRef.current.y);
        ctx.quadraticCurveTo(cpX, cpY, x, y);
        ctx.stroke();
        previousPointRef.current = { x, y };
      });
    };

    const stopDrawing = () => {
      drawing = false;
      ctx.closePath();
      cancelAnimationFrame(requestId);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', drawLine);
    canvas.addEventListener('mouseup', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', drawLine);
      canvas.removeEventListener('mouseup', stopDrawing);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const image = imageRef.current;
    const ctx = canvas.getContext('2d');

    image.onload = () => {
      // canvas.width = window.innerWidth;
      canvas.width = window.innerWidth / 2;
      canvas.height = window.innerHeight;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const image = imageRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height); // Stretch the image to cover the entire canvas
    };
    // Initially set canvas dimensions
    resizeCanvas();

    // Listen for window resize events and update canvas dimensions accordingly
    window.addEventListener('resize', resizeCanvas);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className='z-1 absolute bg-white relative'>
      <canvas ref={canvasRef} style={{ width: '50%', height: '100%' }}></canvas>

      <img
        ref={imageRef}
        src='src/assets/hero/white.png'
        alt='Image to erase'
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageEraser;
// src='src/assets/hero/dark-background.jpg'
