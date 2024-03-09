import { Button } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { IoIosSend } from 'react-icons/io';
import { ButtonWrapper, Wrapper } from './ChatForm.style';

export const ChatForm = () => {
  const handleSubmit = () => {};
  return (
    <Form onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <Wrapper>
          <InputField
            type="text"
            registration={register('message')}
            error={formState.errors['message']}
            borderRadius="30px"
            padding="10px 15px"
          />
          <ButtonWrapper>
            <Button
              type="submit"
              variant="secondary"
              startIcon={<IoIosSend size="20" />}
              padding="5px"
              borderRadius="50%"
            />
          </ButtonWrapper>
        </Wrapper>
      )}
    </Form>
  );
};
