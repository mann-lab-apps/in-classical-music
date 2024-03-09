import { Link, useNavigate } from 'react-router-dom';
import { LoginForm } from '../components';
import { Layout } from '../components/Layout';
import { Buttons } from './Login.style';
import { Button } from '@/components/Elements';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <Layout heading="로그인">
      <LoginForm
        onSuccess={() => {
          navigate('/');
        }}
      />
      <Buttons>
        <Link to="/auth/find-email">
          <Button padding="5px">이메일 찾기</Button>
        </Link>
        <Link to="/auth/find-password">
          <Button padding="5px">비밀번호 찾기</Button>
        </Link>
        <Link to="/auth/join">
          <Button padding="5px">회원가입</Button>
        </Link>
      </Buttons>
    </Layout>
  );
};
