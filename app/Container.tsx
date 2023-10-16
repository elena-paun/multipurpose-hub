import React, { useState } from 'react';
import { navLinks } from './constants';
import { About, Hero, Navbar } from './components';
import VerticalStepper from '../src/components/VerticalStepper';
import { useLocation, useNavigate } from 'react-router-dom';
import { styles } from './styles';

const Container = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.theme);
  const [active, setActive] = useState(location.hash);
  console.log({ active });
  const handleStepClick = (step) => {
    setActive(step);
    navigate(`#${step}`);
  };
  return (
    <section className='main-section h-screen w-full '>
      <Navbar
        setActive={setActive}
        active={active}
        setTheme={setTheme}
        theme={theme}
      />
      <VerticalStepper
        steps={navLinks}
        handleStepClick={handleStepClick}
        active={active}
        fill={theme === 'dark' ? styles.fontColor.dark : styles.fontColor.light}
      />
      <Hero theme={theme} />
      {/* <About /> */}
    </section>
  );
};

export default Container;
