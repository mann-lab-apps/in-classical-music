import { FindPasswordForm, Layout } from '../components';
import { Wrapper } from './FindPassword.style';

export const FindPassword = () => {
  const onSuccess = () => {};
  return (
    <Layout heading="비밀번호 찾기">
      <Wrapper>
        <FindPasswordForm onSuccess={() => onSuccess()} />
      </Wrapper>
    </Layout>
  );
};
