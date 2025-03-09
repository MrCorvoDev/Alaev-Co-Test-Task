import styled from 'styled-components';

import Container from '../components/core/Container';
import Section from '../components/core/Section';
import em from '../styles/utils/em';

const Headline = styled.h1`
   font-size: ${em(32)};
`;

const About = () => (
   <Section>
      <Container>
         <Headline>About</Headline>
      </Container>
   </Section>
);
export default About;
