import {css} from 'styled-components';

import getPercent from '../../utils/getPercent';
import layout from '../theme/layout';
import md from './md';
import rem from './rem';

const maxWidth = (
   value: number,
   width: number = layout.containers[1],
   stopMax: number = layout.designWidth,
) => css`
   max-width: ${getPercent(value, width)};
   @media (${md(stopMax)}) {
      max-width: ${rem(value)};
   }
`;

export default maxWidth;
