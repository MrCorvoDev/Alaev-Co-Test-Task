import {
   Children,
   cloneElement,
   createContext,
   Dispatch,
   PropsWithChildren,
   ReactElement,
   SetStateAction,
   useState,
} from 'react';

interface AccordionGroupContextType {
   activeIndex: number | undefined;
   setActiveIndex: Dispatch<SetStateAction<number | undefined>>;
}
export const AccordionGroupContext = createContext(
   {} as AccordionGroupContextType,
);

const AccordionGroupProvider = ({children}: PropsWithChildren) => {
   const [activeIndex, setActiveIndex] =
      useState<AccordionGroupContextType['activeIndex']>();

   return (
      <AccordionGroupContext.Provider value={{activeIndex, setActiveIndex}}>
         {Children.map(children, (child, index) =>
            cloneElement(child as ReactElement<{index: number}>, {
               key: index,
               index,
            }),
         )}
      </AccordionGroupContext.Provider>
   );
};

export default AccordionGroupProvider;
