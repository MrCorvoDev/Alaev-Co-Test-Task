import styled from 'styled-components';

import AccordionProvider from '../contexts/AccordionContext';
import useAccordion from '../hooks/useAccordion';
import em from '../styles/utils/em';
import rem from '../styles/utils/rem';
import AccordionButton from './accordion/AccordionButton';
import AccordionContent from './accordion/AccordionContent';

const LoginTipEl = styled.div`
   max-width: ${em(370)};
   padding: ${em(16)} ${em(24)};
   border-radius: ${rem(16)};
   background: ${props => props.theme.palette[2]};
`;
const LoginTipButton = styled(AccordionButton)`
   font-size: ${em(22)};
`;
const LoginTipContent = styled.div`
   padding-top: ${em(16)};
   display: flex;
   flex-direction: column;
   color: ${props => props.theme.palette[3]};
   p {
      font-size: ${em(16)};
      margin-bottom: ${em(12)};
   }
   label {
      display: flex;
      gap: ${em(8)};
      margin-bottom: ${em(6)};
      cursor: pointer;
      &:last-child {
         margin: 0;
      }
      span,
      input {
         font-size: ${em(16)};
      }
      input {
         color: ${props => props.theme.palette[3]};
         cursor: pointer;
         background: transparent;
         border: none;
         &:focus,
         &:focus-visible {
            outline: none;
         }
      }
   }
`;

const clickToCopy = (e: React.MouseEvent<HTMLInputElement>) => {
   const input = e.target as HTMLInputElement;
   input.select();
   input.setSelectionRange(0, 99999);

   navigator.clipboard
      .writeText(input.value)
      .then(() => {
         console.log('Text copied to clipboard');
      })
      .catch(err => {
         console.error('Failed to copy text: ', err);
      });
};

const LoginTipComponent = () => {
   const {isOpened} = useAccordion();

   return (
      <LoginTipEl>
         <LoginTipButton>
            Having Trouble? {isOpened ? 'Hide' : 'Show'} Login Tip
         </LoginTipButton>
         <AccordionContent>
            <LoginTipContent>
               <p>
                  Authenticated users credentials encoded in backend mock, click
                  to copy:
               </p>
               <label>
                  <span>Login:</span>
                  <input
                     type='text'
                     readOnly
                     value='aleksei@example.com'
                     onClick={clickToCopy}
                  />
               </label>
               <label>
                  <span>Password:</span>
                  <input
                     type='text'
                     readOnly
                     value='lkJlkn8hj'
                     onClick={clickToCopy}
                  />
               </label>
            </LoginTipContent>
         </AccordionContent>
      </LoginTipEl>
   );
};

const LoginTip = () => (
   <AccordionProvider>
      <LoginTipComponent />
   </AccordionProvider>
);

export default LoginTip;
