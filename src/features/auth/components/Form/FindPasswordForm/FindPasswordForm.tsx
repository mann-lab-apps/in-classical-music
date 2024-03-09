import { Form, InputField } from '@/components/Form';
import { Description, FormInner } from './FindPasswordForm.styls';
import { Button } from '@/components/Elements';
import { useState } from 'react';
import { resetPassword } from '@/features/auth/api';
import { FieldValues } from 'react-hook-form';

type FindPasswordFormProps = {
  onSuccess: () => void;
};

export const FindPasswordForm = ({ onSuccess }: FindPasswordFormProps) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = async (values: FieldValues) => {
    console.log('click');
    const { email } = values;
    const { data, error } = await resetPassword({ email });
    if (error) {
      return console.log(error);
    }
    console.log(data);
    onSuccess();
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(value)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <FormInner>
          <InputField
            label="가입한 이메일 주소"
            placeholder="address@inclassicalmusic.com"
            type="email"
            error={formState.errors['email']}
            registration={register('email', {
              required: true,
              onChange: (event) => handleChangeEmail(event),
            })}
          />
          <Description>
            {
              '가입하신 이메일 주소를 입력해주시면\n새로운 비밀번호를 설정할 수 있는 링크를 발송드립니다'
            }
          </Description>
          <Button
            isDisabled={isDisabled}
            variant={isDisabled ? 'secondary' : 'primary'}
            padding="10px"
            fontSize="medium"
          >
            이메일 전송하기
          </Button>
        </FormInner>
      )}
    </Form>
  );
};
