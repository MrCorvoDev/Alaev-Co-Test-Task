import {ComponentProps} from 'react';
import styled from 'styled-components';

import em from '../../styles/utils/em';

const SectionEl = styled.section`
   padding: ${em(64)} 0;
`;

const Section = ({children, ...props}: ComponentProps<'section'>) => (
   <SectionEl {...props}>
      {children} <section></section>
   </SectionEl>
);
export default Section;
