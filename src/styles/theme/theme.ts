import {DefaultTheme} from 'styled-components';

import layout from './layout';
import palette from './palette';
import typography from './typography';

declare module 'styled-components' {
   export interface DefaultTheme {
      layout: typeof layout;
      palette: typeof palette;
      typography: typeof typography;
   }
}

//! Avoid imports of this const, theme might change dynamically. Try recommended styled-components method or useTheme hook
const theme: DefaultTheme = {
   layout,
   palette,
   typography,
};

export default theme;
