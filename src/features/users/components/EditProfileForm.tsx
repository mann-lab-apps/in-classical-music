import { Form, InputField } from '@/components/Form';
import { Wrapper } from './EditProfileForm.style';
import { useEffect } from 'react';

export const EditProfileForm = () => {
  useEffect(() => {});
  const handleSubmit = () => {};
  return (
    <Form onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <Wrapper>
          <InputField
            label="이름"
            type="text"
            registration={register('username')}
            error={formState.errors['username']}
          />
          <InputField
            label="이메일"
            type="email"
            registration={register('email')}
            error={formState.errors['email']}
          />
          <InputField
            label="연락처"
            type="number"
            registration={register('phoneNumber')}
            error={formState.errors['phoneNumber']}
          />
          <InputField
            label="관심태그"
            type="text"
            registration={register('tags')}
            error={formState.errors['tags']}
          />
        </Wrapper>
      )}
    </Form>
  );
};
