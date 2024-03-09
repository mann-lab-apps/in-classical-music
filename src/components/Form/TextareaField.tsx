import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Textarea } from './TextareaField.style';

type TextareaFieldProps = FieldWrapperPassThroughProps & {
  registration: UseFormRegisterReturn<string>;
  placeholder?: string;
  borderRadius?: string;
  padding?: string;
};

export const TextareaField = ({
  label,
  error,
  registration,
  placeholder,
  borderRadius = '5px',
  padding = '10px',
}: TextareaFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <Textarea
        borderRadius={borderRadius}
        padding={padding}
        placeholder={placeholder}
        {...registration}
      />
    </FieldWrapper>
  );
};
