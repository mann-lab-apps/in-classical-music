import { Content } from './Logo.style';

type LogoProps = {
  size?: keyof typeof sizes;
};

const sizes = {
  small: {
    type: 'body',
    detail: 'small',
  },
  medium: {
    type: 'title',
    detail: 'large',
  },
};

export const Logo = ({ size = 'medium' }: LogoProps) => {
  return (
    <Content type={sizes[size].type} detail={sizes[size].detail}>
      in C
    </Content>
  );
};
