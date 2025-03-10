import styled, {css} from 'styled-components';

import QuoteEndImage from '../assets/quote-end.svg';
import QuoteStartImage from '../assets/quote-start.svg';
import em from '../styles/utils/em';
import rem from '../styles/utils/rem';
import Image from './core/Image';

const QuoteEl = styled.blockquote`
   position: relative;
   background: ${props => props.theme.palette[2]};
   padding: ${em(36)} ${em(48)};
   border-radius: ${rem(16)};
   display: flex;
   flex-direction: column;
   gap: ${em(24)};
   margin-top: ${em(42)};
   max-width: ${em(600)};
`;
const QuoteSymbol = styled.span<{$type: 'start' | 'end'}>`
   position: absolute;
   img {
      width: ${em(24)};
      height: ${em(24)};
   }

   ${props =>
      props.$type === 'start' &&
      css`
         left: ${em(12)};
         top: ${em(10)};
      `}

   ${props =>
      props.$type === 'end' &&
      css`
         right: ${em(12)};
         bottom: ${em(10)};
      `}
`;
const Paragraph = styled.p`
   font-size: ${em(26)};
`;
const Author = styled.cite`
   font-size: ${em(18)};
   text-align: right;
   color: ${props => props.theme.palette[3]};
`;

interface QuoteProps {
   author: string;
   quote: string;
}
const Quote = ({author, quote}: QuoteProps) => (
   <QuoteEl>
      <QuoteSymbol $type='start'>
         <Image src={QuoteStartImage} alt='quote start' />
      </QuoteSymbol>
      <Paragraph>{quote}</Paragraph>
      <Author>{author}</Author>
      <QuoteSymbol $type='end'>
         <Image src={QuoteEndImage} alt='quote end' />
      </QuoteSymbol>
   </QuoteEl>
);
export default Quote;
