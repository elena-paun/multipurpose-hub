import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedApp from '.';
import AnimatedCursor from 'react-animated-cursor';
import Router from './Router';
// ReactDOM.createRoot(document.getElementById('root') as Element).render(
//   <React.StrictMode>
//     <ConnectedApp />
//   </React.StrictMode>
// );
ReactDOM.render(
  <React.StrictMode>
    {/* <AnimatedCursor
      innerSize={8}
      outerSize={100}
      innerScale={1}
      outerScale={1}
      outerAlpha={0}
      // hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'white',
        mixBlendMode: 'exclusion',
      }}
      outerStyle={{
        border: '3px solid white',
        mixBlendMode: 'exclusion',
      }}
    /> */}
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
