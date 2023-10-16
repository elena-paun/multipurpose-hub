// // import React, { useRef } from 'react';
// // import { Blob } from './Blob';

// // export const BlobComponent = () => {
// //   let blob = new Blob();
// //   let canvas;
// //   const init = () => {
// //     // canvas = document.createElement('canvas');
// //     if (!canvas) return;
// //     canvas = document.getElementById('blob-canvas');
// //     canvas.setAttribute('touch-action', 'none');
// //     // canvas.setAttribute('id', 'blob-canvas');
// //     const canvasContainer = document.getElementById('canvas-container');
// //     document.body.appendChild(canvas);

// //     let resize = function () {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };
// //     window.addEventListener('resize', resize);
// //     resize();

// //     let oldMousePoint = { x: 0, y: 0 };
// //     let hover = false;
// //     let mouseMove = function (e) {
// //       let pos = blob.center;
// //       let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
// //       let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
// //       let angle = null;

// //       blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };

// //       if (dist < blob.radius && hover === false) {
// //         let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
// //         angle = Math.atan2(vector.y, vector.x);
// //         hover = true;
// //         // blob.color = '#77FF00';
// //       } else if (dist > blob.radius && hover === true) {
// //         let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
// //         angle = Math.atan2(vector.y, vector.x);
// //         hover = false;
// //         blob.color = null;
// //       }

// //       if (typeof angle == 'number') {
// //         let nearestPoint = null;
// //         let distanceFromPoint = 100;

// //         blob.points.forEach((point) => {
// //           if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
// //             // console.log(point.azimuth, angle, distanceFromPoint);
// //             nearestPoint = point;
// //             distanceFromPoint = Math.abs(angle - point.azimuth);
// //           }
// //         });

// //         if (nearestPoint) {
// //           let strength = {
// //             x: oldMousePoint.x - e.clientX,
// //             y: oldMousePoint.y - e.clientY,
// //           };
// //           strength =
// //             Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
// //           if (strength > 100) strength = 100;
// //           nearestPoint.acceleration = (strength / 100) * (hover ? -1 : 1);
// //         }
// //       }

// //       oldMousePoint.x = e.clientX;
// //       oldMousePoint.y = e.clientY;
// //     };
// //     // window.addEventListener('mousemove', mouseMove);
// //     window.addEventListener('pointermove', mouseMove);

// //     blob.canvas = canvas;
// //     blob.init();
// //     blob.render();
// //     blob.canvas.width = window.innerWidth;
// //     blob.canvas.height = window.innerHeight;
// //   };
// //   init();
// //   // blob.render();
// //   // blob.canvas = canvas; // Assign the canvas here
// //   // blob.init();
// //   blob.render();
// //   return <canvas id='blob-canvas' />;
// // };

// // export default BlobComponent;
// import React, { Component } from 'react';

// class BlobCanvas extends Component {
//   constructor(props) {
//     super(props);
//     this.canvasRef = React.createRef();
//   }

//   componentDidMount() {
//     this.initBlob();
//   }

//   initBlob() {
//     // Place the code you provided here, but replace 'canvas' with 'this.canvasRef.current'.
//     // For example, replace 'canvas.width' with 'this.canvasRef.current.width'.

//     // ...

//     // Initialize the canvas and render the blob.
//     blob.canvas = this.canvasRef.current;
//     blob.init();
//     blob.render();
//   }

//   render() {
//     return (
//       <div>
//         <canvas ref={this.canvasRef}></canvas>
//       </div>
//     );
//   }
// }

// export default BlobCanvas;
import React, { useEffect, useRef } from 'react';
import { Blob } from './Blob';

const BlobCanvas = ({ canvasRef, id }) => {
  console.log({ canvasRef });
  useEffect(() => {
    const blob = new Blob(id);

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', id);
    canvas.setAttribute('touch-action', 'none');

    const container = document.getElementById(`blob-canvas-${id}`);
    container.appendChild(canvas);

    const resize = function () {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    let oldMousePoint = { x: 0, y: 0 };
    let hover = false;
    const mouseMove = function (e) {
      let pos = blob.center;
      let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
      let angle = null;

      blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };

      if (dist < blob.radius && hover === false) {
        let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
        angle = Math.atan2(vector.y, vector.x);
        hover = true;
      } else if (dist > blob.radius && hover === true) {
        let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
        angle = Math.atan2(vector.y, vector.x);
        hover = false;
        blob.color = null;
      }

      if (typeof angle === 'number') {
        let nearestPoint = null;
        let distanceFromPoint = 100;

        blob.points.forEach((point) => {
          if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
            nearestPoint = point;
            distanceFromPoint = Math.abs(angle - point.azimuth);
          }
        });

        if (nearestPoint) {
          let strength = {
            x: oldMousePoint.x - e.clientX,
            y: oldMousePoint.y - e.clientY,
          };
          strength =
            Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
          if (strength > 100) strength = 100;
          nearestPoint.acceleration = (strength / 100) * (hover ? -1 : 1);
        }
      }

      oldMousePoint.x = e.clientX;
      oldMousePoint.y = e.clientY;
    };

    canvas.addEventListener('pointermove', mouseMove);

    blob.canvas = canvas;
    blob.init();
    blob.render();

    return () => {
      // Clean up event listeners or any other resources here if needed
      canvas.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', mouseMove);
      container.removeChild(canvas);
    };
  }, [id]); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div
      id={`blob-canvas-${id}`}
      ref={canvasRef}
      style={{ width: '50%', height: '50%' }}>
      {/* The canvas will be appended here */}
    </div>
  );
};

export default BlobCanvas;
