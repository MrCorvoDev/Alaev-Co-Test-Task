import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from 'styled-components';

import App from './App';
import AuthProvider from './contexts/AuthContext';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme/theme';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <ThemeProvider theme={theme}>
         <AuthProvider>
            <GlobalStyles />
            <App />
         </AuthProvider>
      </ThemeProvider>
   </StrictMode>,
);
