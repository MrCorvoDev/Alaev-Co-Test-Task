import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ComponentProps} from 'react';
import styled from 'styled-components';

import useModal from '../../hooks/useModal';
import em from '../../styles/utils/em';

const FONT_SIZE = 32;
const Button = styled.button`
   position: absolute;
   font-size: ${em(FONT_SIZE)};
   top: ${em(6, FONT_SIZE)};
   right: ${em(6, FONT_SIZE)};
   padding: ${em(6, FONT_SIZE)};
   transition: 0.3s;
   @media (hover: hover) {
      &:hover {
         color: ${props => props.theme.palette[3]};
      }
   }
   svg {
      width: 1em;
   }
`;

const ModalCloseButton = ({children, ...props}: ComponentProps<'button'>) => {
   const {setIsOpen} = useModal();

   return (
      <Button
         type='button'
         onClick={e => {
            setIsOpen(false);
            props.onClick?.(e);
         }}
         {...props}
      >
         {children ? children : <FontAwesomeIcon icon={faTimes} />}
      </Button>
   );
};
export default ModalCloseButton;
