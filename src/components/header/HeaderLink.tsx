import {ReactNode} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import styled from 'styled-components';

import ButtonStyles from '../../styles/components/ButtonStyles';

const Link = styled(RouterLink)`
   ${ButtonStyles}
`;

interface HeaderLinkProps {
   to: string;
   children: ReactNode | undefined;
}
const HeaderLink = ({to, children}: HeaderLinkProps) => (
   <Link to={to}>
      <span>{children}</span>
   </Link>
);
export default HeaderLink;
