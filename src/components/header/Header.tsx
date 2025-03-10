import styled from 'styled-components';

import {logout} from '../../api/backendApi';
import useAuth from '../../hooks/useAuth';
import layout from '../../styles/theme/layout';
import em from '../../styles/utils/em';
import md from '../../styles/utils/md';
import Container from '../core/Container';
import Button from '../form/Button';
import HeaderLink from './HeaderLink';

const HeaderEl = styled.header`
   padding: ${em(16)} 0;
`;

const Nav = styled.nav`
   display: flex;
   gap: ${em(24)};
   @media (${md(layout.breakpoints[4])}) {
      justify-content: center;
   }
`;

const Header = () => {
   const {token, setToken} = useAuth();

   const signOut = async (token: string) => {
      await logout(token);
      setToken(null);
   };

   return (
      <HeaderEl>
         <Container>
            <Nav>
               <HeaderLink to='/'>About</HeaderLink>

               {token ? (
                  <>
                     <HeaderLink to='/profile'>Profile</HeaderLink>
                     <Button type='button' onClick={() => void signOut(token)}>
                        Sign Out
                     </Button>
                  </>
               ) : (
                  <HeaderLink to='/login'>Sign In</HeaderLink>
               )}
            </Nav>
         </Container>
      </HeaderEl>
   );
};

export default Header;
