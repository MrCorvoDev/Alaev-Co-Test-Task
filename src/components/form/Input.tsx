import {ComponentProps} from 'react';
import {
   FieldError,
   FieldValues,
   RegisterOptions,
   useFormContext,
} from 'react-hook-form';
import styled from 'styled-components';

import em from '../../styles/utils/em';
import rem from '../../styles/utils/rem';

const FONT_SIZE = 21;
const InputEl = styled.input<{$error: FieldError | undefined}>`
   font-size: ${em(FONT_SIZE)};
   min-height: ${em(64, FONT_SIZE)};
   padding: 0 ${em(20, FONT_SIZE)};
   color: ${props => props.theme.palette[4]};
   background: transparent;
   border: ${rem(2)} solid
      ${props =>
         props.$error ? props.theme.palette.helpers.danger : 'currentColor'};
   border-radius: ${rem(5)};
   width: 100%;
`;

interface InputProps extends ComponentProps<'input'> {
   name?: string;
   placeholder?: string | undefined;
   required?: boolean;
   options?: RegisterOptions<FieldValues, string>;
   forceNoReactHookForm?: boolean;
}
const Input = ({
   name,
   placeholder,
   required = true,
   options = {},
   forceNoReactHookForm = false,
   ...props
}: InputProps) => {
   const {
      register,
      formState: {errors},
   } = useFormContext() ?? {formState: {}};

   const formProps = name
      ? !forceNoReactHookForm && register
         ? {...register?.(name, {required, ...options})}
         : {name}
      : {};

   const error = name ? (errors?.[name] as FieldError | undefined) : undefined;

   return (
      <InputEl
         placeholder={placeholder}
         $error={error}
         {...formProps}
         {...props}
      />
   );
};
export default Input;
