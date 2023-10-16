import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const StarWrapper = (Component, className) =>
  function HOC() {
    return (
      <>
        <div className={`h-screen ${className} fixed w-1/2`} />
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          className={`z-0 h-screen overflow-hidden`}>
          {/* <span className='hash-span' id={idName}>
            &nbsp;
          </span> */}

          <Component />
        </motion.section>
      </>
    );
  };

export default StarWrapper;
