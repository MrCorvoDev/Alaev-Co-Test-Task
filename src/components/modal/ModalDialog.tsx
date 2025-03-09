import {useClickAway} from '@uidotdev/usehooks';
import {PropsWithChildren, RefObject} from 'react';
import styled, {css, keyframes, RuleSet} from 'styled-components';

import useModal from '../../hooks/useModal';
import ModalStyles from '../../styles/components/ModalStyles';
import rem from '../../styles/utils/rem';

const fadeAnimation = (show: boolean) => keyframes`
   from {
      opacity: ${Number(!show)};
   }
   to {
      opacity: ${Number(show)};
   }
`;

const getTransform = (show: boolean) => css`
   transform: perspective(${rem(600)}) translateY(${show ? 0 : -20}%)
      scale(${show ? 1 : 0.7}) rotateX(${show ? 0 : 45}deg);
`;
const perspectiveAnimation = (show: boolean) => keyframes`
   from {
      ${getTransform(!show)}
   }
   to {
      ${getTransform(show)}
   }
`;

const DURATION = 0.3;
const ModalEl = styled.dialog<{$styles?: RuleSet<object>}>`
   background: transparent;
   width: 100%;
   height: 100%;
   max-width: none;
   max-height: none;
   padding: ${rem(24)};
   transition:
      display ${DURATION}s allow-discrete,
      overlay ${DURATION}s allow-discrete;
   animation:
      ${fadeAnimation(false)} ${DURATION}s forwards,
      ${perspectiveAnimation(false)} ${DURATION}s forwards;

   &::backdrop {
      animation: ${fadeAnimation(false)} ${DURATION}s forwards;

      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(${rem(16)});
   }
   &[open] {
      display: flex;
      justify-content: center;
      align-items: center;
      animation:
         ${fadeAnimation(true)} ${DURATION}s forwards,
         ${perspectiveAnimation(true)} ${DURATION}s forwards;

      &::backdrop {
         animation: ${fadeAnimation(true)} ${DURATION}s forwards;
      }
   }

   ${props => props.$styles}
`;
const ModalBody = styled.div<{$styles: RuleSet<object>}>`
   position: relative;
   margin: auto;

   ${props => props.$styles}
`;

interface ModalDialogProps extends PropsWithChildren {
   dialogStyles?: RuleSet<object>;
   bodyStyles?: RuleSet<object>;
}
const ModalDialog = ({
   children,
   dialogStyles,
   bodyStyles = ModalStyles,
}: ModalDialogProps) => {
   const {ref, setIsOpen} = useModal();

   const bodyRef = useClickAway(() => setIsOpen(false));

   return (
      <ModalEl
         ref={ref}
         $styles={dialogStyles}
         onCancel={() => setIsOpen(false)}
      >
         <ModalBody
            ref={bodyRef as RefObject<HTMLDivElement>}
            $styles={bodyStyles}
         >
            {children}
         </ModalBody>
      </ModalEl>
   );
};

export default ModalDialog;
