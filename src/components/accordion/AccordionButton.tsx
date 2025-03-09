import {ComponentProps} from 'react';

import useAccordion from '../../hooks/useAccordion';

const AccordionButton = ({children, ...props}: ComponentProps<'button'>) => {
   const {toggle} = useAccordion();

   return (
      <button
         type='button'
         onClick={e => {
            toggle();
            props.onClick?.(e);
         }}
         {...props}
      >
         {children}
      </button>
   );
};
export default AccordionButton;
