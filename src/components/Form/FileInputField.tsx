import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Input } from './FileInputField.style';
import { ChangeEvent } from 'react';

export type FileInputFieldProps = FieldWrapperPassThroughProps & {
  registration: UseFormRegisterReturn<string>;
  accept?: string;
  labelComponent?: React.ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const FileInputField = ({
  label,
  registration,
  error,
  accept,
  labelComponent,
  onChange,
}: FileInputFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      {labelComponent}
      <Input
        type="file"
        {...registration}
        accept={accept}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};
