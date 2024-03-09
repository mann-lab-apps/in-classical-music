import { Button } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { useState } from 'react';

type FindEmailFormProps = {
  onSuccess: () => void;
};

export const FindEmailForm = ({ onSuccess }: FindEmailFormProps) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const handleSubmit = () => {
    onSuccess();
  };

  const handleChangePhoneNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const regex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    const value = event.target.value;
    if (regex.test(value)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <>
          <InputField
            label="휴대전화 번호"
            placeholder="010 1234 5678"
            registration={register('phoneNumber', {
              required: true,
              onChange: (event) => handleChangePhoneNumber(event),
            })}
            error={formState.errors['phonNumber']}
            type="number"
            button={
              <>
                <Button
                  fontSize="small"
                  padding="10px"
                  isDisabled={isDisabled}
                  variant={isDisabled ? 'secondary' : 'primary'}
                >
                  이메일 찾기
                </Button>
              </>
            }
          />
        </>
      )}
    </Form>
  );
};
