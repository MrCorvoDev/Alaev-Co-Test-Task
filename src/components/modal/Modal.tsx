import {ComponentProps, Dispatch, SetStateAction} from 'react';
import {createPortal} from 'react-dom';

import ModalProvider from '../../contexts/ModalContext';
import ModalDialog from './ModalDialog';

const PortalEl = document.getElementById('portal')!;

interface ModalProps extends ComponentProps<typeof ModalDialog> {
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const Modal = ({
   isOpen,
   setIsOpen,
   dialogStyles,
   bodyStyles,
   children,
}: ModalProps) =>
   createPortal(
      <ModalProvider isOpen={isOpen} setIsOpen={setIsOpen}>
         <ModalDialog dialogStyles={dialogStyles} bodyStyles={bodyStyles}>
            {children}
         </ModalDialog>
      </ModalProvider>,
      PortalEl,
   );

export default Modal;
