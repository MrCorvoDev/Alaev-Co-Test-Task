import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {login} from '../api/backendApi';
import Container from '../components/core/Container';
import Section from '../components/core/Section';
import Button from '../components/form/Button';
import Input from '../components/form/Input';
import Label from '../components/form/Label';
import LoginTip from '../components/LoginTip';
import useAuth from '../hooks/useAuth';
import em from '../styles/utils/em';
import rem from '../styles/utils/rem';

const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: ${em(20)};
`;
const TipText = styled.p`
   font-size: ${em(14)};
   color: ${props => props.theme.palette[3]};
`;
const SubmitButton = styled(Button)`
   align-self: flex-start;
   min-width: ${em(200)};
`;
const FormError = styled.p`
   align-self: flex-start;
   background-color: ${props => props.theme.palette[2]};
   padding: ${em(10)} ${em(20)};
   border-radius: ${rem(16)};
   color: ${props => props.theme.palette.helpers.danger};
`;

interface Inputs {
   email: string;
   password: string;
}

const Login = () => {
   const navigate = useNavigate();
   const methods = useForm<Inputs>();
   const {setToken} = useAuth();

   const onSubmit: SubmitHandler<Inputs> = async data => {
      const {email, password} = data;
      try {
         const data = await login(email, password);

         setToken(data.token);

         await navigate('/');
      } catch (error) {
         if (error instanceof Error)
            methods.setError('root', {message: error.message});
      }
   };

   const submitHandle = methods.handleSubmit(onSubmit);

   return (
      <Section>
         <Container>
            <FormProvider {...methods}>
               <Form onSubmit={e => void submitHandle(e)}>
                  <Label title='Email address'>
                     <Input
                        name='email'
                        placeholder='Email'
                        required
                        options={{
                           pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: '',
                           },
                        }}
                     />
                     <TipText>
                        We'll never share your email with anyone else.
                     </TipText>
                  </Label>

                  <Label title='Password'>
                     <Input
                        name='password'
                        type='password'
                        placeholder='Password'
                        required
                        options={{
                           minLength: {
                              value: 8,
                              message: '',
                           },
                        }}
                     />
                  </Label>

                  <SubmitButton type='submit'>Login</SubmitButton>

                  {methods.formState.errors.root && (
                     <FormError>
                        {methods.formState.errors.root.message}
                     </FormError>
                  )}
               </Form>
            </FormProvider>
            <br />
            <br />
            <LoginTip />
         </Container>
      </Section>
   );
};
export default Login;
