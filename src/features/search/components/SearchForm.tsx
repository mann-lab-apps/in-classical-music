import { Form, InputField } from '@/components/Form';
import { ButtonWrapper, Wrapper } from './SearchForm.style';
import { Button } from '@/components/Elements';

import { RiSearchLine } from 'react-icons/ri';

export const SearchForm = () => {
  const handleSubmit = () => {};
  return (
    <Form onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <Wrapper>
          <InputField
            registration={register('keyword')}
            error={formState.errors['keyword']}
            type="text"
            borderRadius="30px"
            padding="10px 15px"
            placeholder="검색 키워드를 입력해주세요"
          />
          <ButtonWrapper>
            <Button
              startIcon={<RiSearchLine size="20" />}
              padding="10px"
              variant="surface"
            />
          </ButtonWrapper>
        </Wrapper>
      )}
    </Form>
  );
};
