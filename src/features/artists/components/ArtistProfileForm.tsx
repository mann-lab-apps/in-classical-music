import { Form, InputField } from '@/components/Form';
import { FormInner } from './ArtistProfileForm.style';

type ArtistProfileFormProps = {
  id: string;
};

export const ArtistProfileForm = ({ id }: ArtistProfileFormProps) => {
  const handleSubmit = () => {
    console.log('Profile Submit!');
  };
  return (
    <Form onSubmit={handleSubmit} id={id}>
      {({ register, formState }) => (
        <FormInner>
          <InputField
            label="이름"
            placeholder="본명 또는 활동명을 입력해주세요"
            type="text"
            registration={register('name')}
            error={formState.errors['name']}
          />
        </FormInner>
      )}
    </Form>
  );
};
