import React, { useState, useEffect } from 'react';
// import { fabric } from 'fabric';

export const Erase = () => {
  //   const [canvas, setCanvas] = useState('');
  //   const initCanvas = () =>
  //     new fabric.Canvas('c', {
  //       height: 800,
  //       width: 800,
  //       backgroundColor: 'pink',
  //     });
  //   useEffect(() => {
  //     setCanvas(initCanvas());
  //   }, []);
  const canvas = new fabric.Canvas('c', {
    width: document.body.scrollWidth,
    height: '100vh',
    backgroundColor: 'red',
    // backgroundImage: 'src/assets/hero/dark-background.jpg',
    // backgroundColor: 'yellow',
  });
  let erasingRemovesErasedObjects = false;
  function changeAction(target) {
    // ['select', 'erase', 'undo', 'draw', 'spray'].forEach((action) => {
    //   const t = document.getElementById(action);
    //   t.classList.remove('active');
    // });
    // if (typeof target === 'string') target = document.getElementById(target);
    // target.classList.add('active');
    // switch (target.id) {
    //   case 'select':
    //     canvas.isDrawingMode = false;
    //     break;
    //   case 'erase':
    //     canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
    //     canvas.freeDrawingBrush.width = 10;
    //     canvas.isDrawingMode = true;
    //     break;
    //   case 'undo':
    //     canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
    //     canvas.freeDrawingBrush.width = 10;
    //     canvas.freeDrawingBrush.inverted = true;
    //     canvas.isDrawingMode = true;
    //     break;
    //   case 'draw':
    //     canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    //     canvas.freeDrawingBrush.width = 35;
    //     canvas.isDrawingMode = true;
    //     break;
    //   case 'spray':
    //     canvas.freeDrawingBrush = new fabric.SprayBrush(canvas);
    //     canvas.freeDrawingBrush.width = 35;
    //     canvas.isDrawingMode = true;
    //     break;
    //   default:
    //     break;
    // }
    canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
    canvas.freeDrawingBrush.width = 10;
    canvas.isDrawingMode = true;
  }
  function init() {
    // canvas.setOverlayColor('rgba(0,0,255,0.4)', undefined, {
    //   erasable: false,
    // });

    // const t = new fabric.Triangle({
    //   top: 300,
    //   left: 210,
    //   width: 100,
    //   height: 100,
    //   fill: 'blue',
    //   erasable: false,
    // });

    // canvas.add(
    //   new fabric.Rect({
    //     top: 50,
    //     left: 100,
    //     width: 50,
    //     height: 50,
    //     fill: '#f55',
    //     opacity: 0.8,
    //   }),
    //   new fabric.Rect({
    //     top: 50,
    //     left: 150,
    //     width: 50,
    //     height: 50,
    //     fill: '#f55',
    //     opacity: 0.8,
    //   }),
    //   new fabric.Group(
    //     [
    //       t,
    //       new fabric.Circle({
    //         top: 140,
    //         left: 230,
    //         radius: 75,
    //         fill: 'green',
    //       }),
    //     ],
    //     { erasable: 'deep' }
    //   )
    // );
    const rectangle = new fabric.Rect({
      width: 200,
      height: 200,
      /* fill is used to define the background color*/
      fill: 'red',
    });
    /*the add method is used to add objects to the canvas element */
    canvas.add(rectangle);
    // new fabric.Image.fromURL(
    //   //   background.src,
    //   //   'http://fabricjs.com/assets/pug_small.jpg',
    //   'src/assets/hero/dark-background.jpg',
    //   function (img) {
    //     // img.onload = function () {
    //     //   canvas.setHeight(500);
    //     //   canvas.setWidth(500);
    //     //   canvas.setBackgroundImage(
    //     //     'src/assets/hero/dark-background.jpg',
    //     //     canvas.renderAll.bind(canvas)
    //     //   );
    //     // };
    //     img.set('erasable', false);
    //     console.log({ img });
    //     img.scaleToWidth(480);
    //     img.clone((img) => {
    //       console.log({ img });
    //       canvas.add(
    //         img
    //           .set({
    //             left: 400,
    //             top: 350,
    //             clipPath: new fabric.Circle({
    //               radius: 200,
    //               originX: 'center',
    //               originY: 'center',
    //             }),
    //             angle: 30,
    //           })
    //           .scale(0.25)
    //       );
    //       canvas.add(img);
    //       canvas.insertAt(img, 0);
    //       canvas.renderAll();
    //     });

    //     img.set({ opacity: 0.7 });
    //     function animate() {
    //       img.animate('opacity', img.get('opacity') === 0.7 ? 0.4 : 0.7, {
    //         duration: 1000,
    //         onChange: canvas.renderAll.bind(canvas),
    //         onComplete: animate,
    //       });
    //     }
    //     animate();
    //     canvas.setBackgroundImage(img);
    //     img.set({ erasable: false });
    //     canvas.on('erasing:end', ({ targets, drawables }) => {
    //       var output = document.getElementById('output');
    //       output.innerHTML = JSON.stringify(
    //         {
    //           objects: targets.map((t) => t.type),
    //           drawables: Object.keys(drawables),
    //         },
    //         null,
    //         '\t'
    //       );
    //       if (erasingRemovesErasedObjects) {
    //         targets.forEach(
    //           (obj) => obj.group?.removeWithUpdate(obj) || canvas.remove(obj)
    //         );
    //       }
    //     });
    //     canvas.add(img);
    //     canvas.renderAll();
    //   }
    //   //   { crossOrigin: 'anonymous' }
    // );

    function animate() {
      try {
        canvas
          .item(0)
          .animate('top', canvas.item(0).get('top') === 500 ? '100' : '500', {
            duration: 1000,
            onChange: canvas.renderAll.bind(canvas),
            onComplete: animate,
          });
      } catch (error) {
        setTimeout(animate, 500);
      }
    }
    animate();
  }

  const setDrawableErasableProp = (drawable, value) => {
    canvas.get(drawable)?.set({ erasable: value });
    changeAction('erase');
  };
  const rectangle = new fabric.Rect({
    width: 200,
    height: 200,
    /* fill is used to define the background color*/
    fill: 'red',
  });
  /*the add method is used to add objects to the canvas element */
  canvas.add(rectangle);
  //   const setBgImageErasableProp = (input) =>
  //     setDrawableErasableProp('backgroundImage', input.checked);

  //   const setErasingRemovesErasedObjects = (input) =>
  //     (erasingRemovesErasedObjects = input.checked);

  //   const downloadImage = () => {
  //     const ext = 'png';
  //     const base64 = canvas.toDataURL({
  //       format: ext,
  //       enableRetinaScaling: true,
  //     });
  //     const link = document.createElement('a');
  //     link.href = base64;
  //     link.download = `eraser_example.${ext}`;
  //     link.click();
  //   };

  //   const downloadSVG = () => {
  //     const svg = canvas.toSVG();
  //     const a = document.createElement('a');
  //     const blob = new Blob([svg], { type: 'image/svg+xml' });
  //     const blobURL = URL.createObjectURL(blob);
  //     a.href = blobURL;
  //     a.download = 'eraser_example.svg';
  //     a.click();
  //     URL.revokeObjectURL(blobURL);
  //   };

  //   const toJSON = async () => {
  //     const json = canvas.toDatalessJSON(['clipPath', 'eraser']);
  //     const out = JSON.stringify(json, null, '\t');
  //     const blob = new Blob([out], { type: 'text/plain' });
  //     const clipboardItemData = { [blob.type]: blob };
  //     try {
  //       navigator.clipboard &&
  //         (await navigator.clipboard.write([
  //           new ClipboardItem(clipboardItemData),
  //         ]));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     const blobURL = URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = blobURL;
  //     a.download = 'eraser_example.json';
  //     a.click();
  //     URL.revokeObjectURL(blobURL);
  //   };
  //   const canvas = (this.__canvas = new fabric.Canvas('c'));
  canvas.renderAll();

  useEffect(() => {
    init();
    changeAction('erase');
    canvas.renderAll();
  }, []);
  console.log({ canvas });
  if (!canvas) return null;
  return (
    <div className='erase'>
      <button id='select' type='button' onClick={() => changeAction('select')}>
        select
      </button>
      <button id='erase' type='button' onClick={() => changeAction('erase')}>
        erase
      </button>
      <button id='undo' type='button' onClick={() => changeAction('undo')}>
        undo
      </button>
      <h1>Fabric.js on React - fabric.Canvas('...')</h1>
      <canvas id='c'></canvas>{' '}
    </div>
  );
};

export default Erase;
