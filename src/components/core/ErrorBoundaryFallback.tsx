import {ComponentProps} from 'react';
import styled from 'styled-components';

import em from '../../styles/utils/em';
import rem from '../../styles/utils/rem';

const Box = styled.div`
   display: inline-flex;
   flex-direction: column;
   align-self: flex-start;
   gap: ${em(10)};
   padding: ${em(16)};
   margin: ${em(24)};
   border-radius: ${rem(8)};
   background-color: ${props => props.theme.palette[2]};
   p {
      font-size: ${em(22)};
      font-weight: 700;
   }
`;

interface ErrorBoundaryFallbackProps extends ComponentProps<'div'> {
   error: Error;
}
const ErrorBoundaryFallback = ({
   error,
   ...props
}: ErrorBoundaryFallbackProps) => (
   <Box role='alert' {...props}>
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
   </Box>
);
export default ErrorBoundaryFallback;
