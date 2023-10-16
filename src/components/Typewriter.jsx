import { useState, useEffect } from 'react';

export const Typewriter = ({ content, interval, infinite }) => {
  // const [currentText, setCurrentText] = useState('');
  // const [currentIndex, setCurrentIndex] = useState(0);
  // console.log({ currentText });
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prev) => prev + content[index]);
      index++;
      if (index === content.length) clearInterval(intervalId);
    }, interval);
    return () => clearInterval(intervalId);
  }, [content, interval]);

  return <>{text}</>;
};

export default Typewriter;
