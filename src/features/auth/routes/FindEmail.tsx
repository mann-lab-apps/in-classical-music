import { useNavigate } from 'react-router-dom';
import { FindEmailForm, Layout } from '../components';
import { Button } from '@/components/Elements';
import { useState } from 'react';
import { Wrapper } from './FindEmail.style';

export const FindEmail = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  return (
    <Layout heading="이메일 찾기">
      <Wrapper>
        <FindEmailForm
          onSuccess={() => {
            setIsDisabled(false);
          }}
        />
        <Button
          onClick={() => {
            navigate('/auth/login');
          }}
          isDisabled={isDisabled}
          variant={isDisabled ? 'secondary' : 'primary'}
          padding="10px"
          fontSize="medium"
        >
          확인
        </Button>
      </Wrapper>
    </Layout>
  );
};
