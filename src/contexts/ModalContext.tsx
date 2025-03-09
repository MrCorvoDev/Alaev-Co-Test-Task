import {
   createContext,
   Dispatch,
   PropsWithChildren,
   RefObject,
   SetStateAction,
   useLayoutEffect,
   useRef,
} from 'react';

import useLockScroll from '../hooks/useLockScroll';

interface ModalContextType {
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
   ref: RefObject<HTMLDialogElement | null>;
}
export const ModalContext = createContext({} as ModalContextType);

interface ModalProviderProps extends PropsWithChildren {
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const ModalProvider = ({isOpen, setIsOpen, children}: ModalProviderProps) => {
   const ref = useRef<ModalContextType['ref']['current']>(null);

   useLockScroll(isOpen);

   useLayoutEffect(() => {
      const dialog = ref.current;

      if (dialog && isOpen) {
         dialog.showModal();
      } else if (dialog) {
         dialog.close();
      }
   }, [isOpen, ref?.current?.open]);

   return (
      <ModalContext.Provider value={{isOpen, setIsOpen, ref}}>
         {children}
      </ModalContext.Provider>
   );
};

export default ModalProvider;
