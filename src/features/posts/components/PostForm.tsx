import {
  Form,
  ImageInputField,
  InputField,
  SelectField,
  TextareaField,
} from '@/components/Form';
import { FormInner } from './PostForm.style';
import { useEffect, useState } from 'react';
import { Link } from '@/components/Elements';
import { storage } from '@/utils/storage';

type PostFormProps = {
  id: string;
};

export const PostForm = ({ id }: PostFormProps) => {
  const [regions, setRegions] = useState<string[]>([]);

  useEffect(() => {
    const regionsInStorage = storage.getValue('regions');
    setRegions(regionsInStorage ? regionsInStorage?.split(',') : []);
  }, []);
  const handleSubmit = () => {
    console.log('Submit');
  };
  return (
    <Form onSubmit={handleSubmit} id={id}>
      {({ register, formState }) => (
        <FormInner>
          <InputField
            type="text"
            label="제목"
            registration={register('title')}
            error={formState.errors['title']}
          />
          <InputField
            type="text"
            label="태그"
            registration={register('tags')}
            error={formState.errors['tags']}
          />
          <SelectField
            label="지역"
            options={regions}
            registration={register('region')}
            error={formState.errors['region']}
          />
          <Link to="/region">지역 추가하기</Link>
          <ImageInputField
            registration={register('image')}
            error={formState.errors['image']}
          />
          <TextareaField
            label="내용"
            registration={register('contents')}
            error={formState.errors['content']}
          />
        </FormInner>
      )}
    </Form>
  );
};
