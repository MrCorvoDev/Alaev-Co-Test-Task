import styled from 'styled-components';

import {logout} from '../../api/backendApi';
import useAuth from '../../hooks/useAuth';
import em from '../../styles/utils/em';
import Container from '../core/Container';
import Button from '../form/Button';
import HeaderLink from './HeaderLink';

const HeaderEl = styled.header`
   padding: ${em(16)} 0;
`;

const Nav = styled.nav`
   display: flex;
   gap: ${em(24)};
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
