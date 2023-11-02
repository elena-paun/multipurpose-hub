import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const StarWrapper = (Component, className) =>
  function HOC() {
    return (
      <>
        <div
          className={`h-screen fixed ${className}  hidden md:block translate-x-0 md:translate-x-1/2  w-80 `}
        />
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          className={` h-screen overflow-hidden`}>
          {/* <span className='hash-span' id={idName}>
            &nbsp;
          </span> */}

          <Component />
        </motion.section>
      </>
    );
  };

export default StarWrapper;
