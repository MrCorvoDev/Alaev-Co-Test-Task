import {motion} from 'motion/react';
import {PropsWithChildren, useState} from 'react';

import useAccordion from '../../hooks/useAccordion';

const AccordionContent = ({children}: PropsWithChildren) => {
   const {isOpened} = useAccordion();
   const [isVisible, setIsVisible] = useState(isOpened);
   const [isOverflow, setIsOverflow] = useState(!isOpened);

   const animation = isOpened
      ? {opacity: 1, height: 'auto'}
      : {opacity: 0, height: 0};

   const handleAnimation = (isStart: boolean) => {
      if (isStart && isOpened) setIsVisible(true);
      if (!isStart && !isOpened) setIsVisible(false);
      setIsOverflow(isStart);
   };

   return (
      <motion.div
         style={{
            overflow: isOverflow ? 'hidden' : 'visible',
            visibility: isVisible ? 'visible' : 'hidden',
         }}
         initial={animation}
         animate={animation}
         onAnimationStart={() => handleAnimation(true)}
         onAnimationComplete={() => handleAnimation(false)}
      >
         {children}
      </motion.div>
   );
};
export default AccordionContent;
