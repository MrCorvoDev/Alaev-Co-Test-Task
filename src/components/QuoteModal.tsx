import {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

import {getAuthor, getQuote} from '../api/backendApi';
import useAuth from '../hooks/useAuth';
import em from '../styles/utils/em';
import Button from './form/Button';
import Modal from './modal/Modal';

const QuoteBody = styled.div`
   display: flex;
   flex-direction: column;
   gap: ${em(24)};
`;
const Title = styled.h2`
   font-size: ${em(32)};
`;
const Steps = styled.ul`
   display: flex;
   flex-direction: column;
   gap: ${em(8)};
`;
const CancelButton = styled(Button)`
   align-self: flex-start;
   background: ${props => props.theme.palette.accent};
   min-width: ${em(200)};
`;

interface QuoteModalProps {
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
   setAuthor: Dispatch<SetStateAction<string>>;
   setQuote: Dispatch<SetStateAction<string>>;
}
const QuoteModal = ({
   isOpen,
   setIsOpen,
   setAuthor,
   setQuote,
}: QuoteModalProps) => {
   const {token} = useAuth();
   const authorAbortController = useRef<AbortController | null>(null);
   const quoteAbortController = useRef<AbortController | null>(null);
   const [isAuthorLoading, setIsAuthorLoading] = useState(true);
   const [isQuoteLoading, setIsQuoteLoading] = useState(true);

   const handleCancel = () => {
      setIsOpen(false);
   };

   useEffect(() => {
      if (isOpen) {
         (async () => {
            authorAbortController.current = new AbortController();
            quoteAbortController.current = new AbortController();

            const author = await getAuthor(
               token!,
               authorAbortController.current.signal,
            );
            setIsAuthorLoading(false);

            const quote = await getQuote(
               token!,
               author.authorId,
               quoteAbortController.current.signal,
            );
            setIsQuoteLoading(false);

            setAuthor(author.name);
            setQuote(quote.quote);
            setIsOpen(false);
         })().catch(console.error);
      } else {
         setIsAuthorLoading(true);
         setIsQuoteLoading(true);
      }

      return () => {
         authorAbortController?.current?.abort();
         quoteAbortController?.current?.abort();
      };
   }, [isOpen, setAuthor, setQuote, token, setIsOpen]);

   const getStatus = (isLoading: boolean) =>
      isLoading ? 'Loading' : 'Completed';

   return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
         <QuoteBody>
            <Title>Requesting the quote</Title>
            <Steps>
               <li>Step 1: Requesting author.. {getStatus(isAuthorLoading)}</li>
               <li>Step 2: Requesting quote.. {getStatus(isQuoteLoading)}</li>
            </Steps>
            <CancelButton type='button' onClick={handleCancel}>
               Close
            </CancelButton>
         </QuoteBody>
      </Modal>
   );
};
export default QuoteModal;
