import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { ButtonWrapper, Input } from './InputField.style';

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: UseFormRegisterReturn<string>;
  placeholder?: string;
  type: 'text' | 'email' | 'password' | 'number';
  button?: React.ReactNode;
  borderRadius?: string;
  padding?: string;
};

export const InputField = ({
  label,
  error,
  registration,
  placeholder,
  button,
  type = 'text',
  borderRadius = '5px',
  padding = '10px',
}: InputFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <Input
        borderRadius={borderRadius}
        padding={padding}
        type={type}
        placeholder={placeholder}
        {...registration}
      />
      {button && <ButtonWrapper>{button}</ButtonWrapper>}
    </FieldWrapper>
  );
};
