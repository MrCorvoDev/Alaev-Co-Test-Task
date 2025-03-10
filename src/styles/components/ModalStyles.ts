import {css} from 'styled-components';

import layout from '../theme/layout';
import em from '../utils/em';
import maxWidth from '../utils/maxWidth';
import rem from '../utils/rem';

const ModalStyles = css`
   ${maxWidth(800, layout.designWidth)}
   width: 100%;
   padding: ${em(52)} ${em(32)} ${em(32)};
   border-radius: ${rem(16)};
   background: ${props => props.theme.palette[2]};
   color: ${props => props.theme.palette[4]};
`;

export default ModalStyles;
