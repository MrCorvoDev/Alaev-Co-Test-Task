import {ComponentProps} from 'react';
import styled from 'styled-components';

import ButtonStyles from '../../styles/components/ButtonStyles';

const ButtonEl = styled.button`
   ${ButtonStyles}
`;

interface ButtonProps extends ComponentProps<'button'> {
   type?: 'button' | 'submit' | 'reset';
   isCustomLayout?: boolean;
}
const Button = ({
   type = 'button',
   isCustomLayout = false,
   children,
   ...props
}: ButtonProps) => (
   <ButtonEl type={type} {...props}>
      {isCustomLayout ? children : <span>{children}</span>}
   </ButtonEl>
);
export default Button;
