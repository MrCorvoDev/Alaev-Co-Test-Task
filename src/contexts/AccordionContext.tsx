import {
   createContext,
   PropsWithChildren,
   useCallback,
   useEffect,
   useState,
} from 'react';

import useAccordionGroup from '../hooks/useAccordionGroup';

interface AccordionContextType {
   toggle: () => void;
   isOpened: boolean;
}
export const AccordionContext = createContext({} as AccordionContextType);

interface AccordionProps extends PropsWithChildren {
   defaultOpened?: boolean;
   index?: number;
}
const AccordionProvider = ({
   defaultOpened = false,
   index,
   children,
}: AccordionProps) => {
   const isGroup = index !== undefined;

   const [isOpened, setIsOpened] = useState(defaultOpened);
   const {activeIndex, setActiveIndex} = useAccordionGroup();

   useEffect(() => {
      if (typeof activeIndex !== 'number') return;

      const shouldClose = isGroup && activeIndex !== index;
      if (shouldClose) setIsOpened(false);
   }, [activeIndex, index, isGroup]);

   const toggle = useCallback(() => {
      if (isGroup && !isOpened) setActiveIndex(index);
      setIsOpened(prevState => !prevState);
   }, [index, isGroup, isOpened, setActiveIndex]);

   return (
      <AccordionContext.Provider value={{toggle, isOpened}}>
         {children}
      </AccordionContext.Provider>
   );
};

export default AccordionProvider;
