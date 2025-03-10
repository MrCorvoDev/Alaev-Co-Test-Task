import styled from 'styled-components';
import useSWR from 'swr';

import {getProfile} from '../api/backendApi';
import AvatarImage from '../assets/avatar.jpg';
import Container from '../components/core/Container';
import Image from '../components/core/Image';
import Section from '../components/core/Section';
import Button from '../components/form/Button';
import useAuth from '../hooks/useAuth';
import layout from '../styles/theme/layout';
import em from '../styles/utils/em';
import md from '../styles/utils/md';

const Header = styled.div`
   display: flex;
   gap: ${em(32)};
   align-items: center;
   @media (${md(layout.breakpoints[4])}) {
      flex-direction: column;
   }
`;
const Avatar = styled.div`
   aspect-ratio: 1 / 1;
   flex: 0 0 ${em(200)};
   width: ${em(200)};
   height: ${em(200)};
   position: relative;
   border-radius: 50%;
   overflow: hidden;
   img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
   }
`;
const HeaderText = styled.div`
   display: flex;
   flex-direction: column;
   gap: ${em(16)};
`;
const Title = styled.h1`
   font-size: ${em(42)};
`;
const UpdateButton = styled(Button)`
   background: ${props => props.theme.palette.accent};
`;

const Profile = () => {
   const {token} = useAuth();
   const profile = useSWR('profile', async () => await getProfile(token!), {
      suspense: true,
   }).data;

   return (
      <Section>
         <Container>
            <Header>
               <Avatar>
                  <Image src={AvatarImage} alt='avatar' />
               </Avatar>
               <HeaderText>
                  <Title>Welcome, {profile.fullname.split(' ')[0]}!</Title>
                  <UpdateButton type='button'>Update</UpdateButton>
               </HeaderText>
            </Header>
         </Container>
      </Section>
   );
};
export default Profile;
