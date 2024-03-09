import { Copyright, Navigation, Wrapper } from './Footer.style';
import { Button, Link } from '@/components/Elements';

export const Footer = () => {
  return (
    <Wrapper>
      <Navigation>
        <Link to="/terms-of-use">서비스 이용약관</Link>
        <Link to="/privacy-policy">개인정보 처리방침</Link>
      </Navigation>
      <Copyright>&copy;Mann Lab Co.,Ltd. all rights reserved.</Copyright>
    </Wrapper>
  );
};
