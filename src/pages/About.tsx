import DOMPurify from 'dompurify';
import styled from 'styled-components';
import useSWR from 'swr';

import {getInfo} from '../api/backendApi';
import Container from '../components/core/Container';
import Section from '../components/core/Section';
import em from '../styles/utils/em';

const Headline = styled.h1`
   font-size: ${em(32)};
`;

const About = () => {
   const dirtyHTML = useSWR('about', getInfo, {suspense: true}).data.info;
   const content = DOMPurify.sanitize(dirtyHTML);

   return (
      <Section>
         <Container>
            <Headline dangerouslySetInnerHTML={{__html: content}}></Headline>
         </Container>
      </Section>
   );
};
export default About;
