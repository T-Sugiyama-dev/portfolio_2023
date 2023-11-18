import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './transition.css';

interface TransitionProp {
  className : string;
  text      : string;
};

export const Transition: React.FC<TransitionProp> = React.memo(({ className, text }) => {

  const [transition, setTransition] = useState<boolean>(true);
  const initialDelay    : number = 1.2;
  const transitionDelay : number = 0.15;

  const transitionAnimationProps = {
    initial: {
      y: "0vh",
    },
    animate: {
      y: "-115vh",
      transition: {
        delay: initialDelay,
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const timeoutId = setTimeout(() => {
      setTransition(false);
      document.body.style.overflowY = "";
    }, 2700);
    return () => clearTimeout(timeoutId);
  }, []);

  return (

    <>
      {transition ? (
        <div className="transition">

          <div className="transition_title">
            <h2 className={className}>{text}</h2>
          </div>

          <div className="transition_container">
            <motion.div {...transitionAnimationProps}>
              <div className="transition_wrapper">
                <div className="bottom_color"></div>
              </div>
            </motion.div>

            <motion.div {...transitionAnimationProps} animate={{ ...transitionAnimationProps.animate, transition: { delay: initialDelay + transitionDelay * 1, ease: "easeInOut", duration: 1, } }}>
              <div className="transition_wrapper">
                <div className="bottom_color"></div>
              </div>
            </motion.div>

            <motion.div {...transitionAnimationProps} animate={{ ...transitionAnimationProps.animate, transition: { delay: initialDelay + transitionDelay * 2, ease: "easeInOut", duration: 1, } }}>
              <div className="transition_wrapper">
                <div className="bottom_color"></div>
              </div>
            </motion.div>

            <motion.div {...transitionAnimationProps} animate={{ ...transitionAnimationProps.animate, transition: { delay: initialDelay + transitionDelay * 3, ease: "easeInOut", duration: 1, } }}>
              <div className="transition_wrapper">
                <div className="bottom_color"></div>
              </div>
            </motion.div>
          </div>

        </div>
      ) :
        null
      }
    </>
  );
});
