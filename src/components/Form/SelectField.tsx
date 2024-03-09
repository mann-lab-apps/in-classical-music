import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Option, Select } from './SelectField.style';

type SelectFieldProps = FieldWrapperPassThroughProps & {
  registration: UseFormRegisterReturn<string>;
  options: any[];
  defaultValue?: string;
};

export const SelectField = ({
  label,
  registration,
  error,
  options = [],
  defaultValue,
}: SelectFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <Select {...registration}>
        {options.map((option, i) => {
          if (option === defaultValue) {
            return (
              <Option key={i} value={option} selected>
                {option}
              </Option>
            );
          }
          return <Option key={i}>{option}</Option>;
        })}
      </Select>
    </FieldWrapper>
  );
};
