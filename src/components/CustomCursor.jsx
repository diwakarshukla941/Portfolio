import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ mousePosition }) => {
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseDown = () => setCursorVariant('click');
    const handleMouseUp = () => setCursorVariant('default');

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
    },
    click: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 0.8,
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
    },
  };

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration:0.05 }}
      />
      <motion.div
        className="custom-cursor-dot"
        variants={dotVariants}
        animate="default"
      />
    </>
  );
};

export default CustomCursor;