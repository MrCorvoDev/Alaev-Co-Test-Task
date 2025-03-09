import {ComponentProps} from 'react';
import styled from 'styled-components';

import em from '../../styles/utils/em';

const LabelEl = styled.label`
   display: flex;
   flex-direction: column;
   gap: ${em(12)};
   span {
      font-size: ${em(24)};
   }
`;

interface LabelProps extends ComponentProps<'label'> {
   title: string;
}
const Label = ({title, children, ...props}: LabelProps) => (
   <LabelEl {...props}>
      <span>{title}</span>
      {children}
   </LabelEl>
);
export default Label;
