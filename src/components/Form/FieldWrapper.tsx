import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { Error, InputWrapper, Label, Wrapper } from './FieldWrapper.style';

type FieldWrapperProps = {
  label?: string;
  children: React.ReactNode;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'children'>;

export const FieldWrapper = ({ label, children, error }: FieldWrapperProps) => {
  return (
    <Wrapper>
      <Label>
        {label}
        <InputWrapper>{children}</InputWrapper>
      </Label>
      {error?.message && <Error>error.message</Error>}
    </Wrapper>
  );
};
