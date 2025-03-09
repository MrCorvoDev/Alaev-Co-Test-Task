import {css} from 'styled-components';

import em from '../utils/em';
import rem from '../utils/rem';

const ButtonStyles = css`
   min-height: ${em(64)};
   padding: ${em(8)} ${em(20)};
   border-radius: ${rem(5)};
   background-color: ${props => props.theme.palette[2]};
   transition: 0.3s;
   span {
      font-size: ${em(24)};
   }
   @media (hover: hover) {
      &:hover {
         background-color: ${props => props.theme.palette[4]};
         color: ${props => props.theme.palette[2]};
      }
   }
`;

export default ButtonStyles;
