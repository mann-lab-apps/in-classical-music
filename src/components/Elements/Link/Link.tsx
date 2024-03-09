import { Wrapper } from './Link.style';

type LinkProps = {
  to: string;
  fontSize?: keyof typeof fontSizes;
  color?: string;
  children: React.ReactNode;
  textDecoration?: 'none' | 'underline';
};

const fontSizes = {
  small: {
    type: 'body',
    detail: 'small',
  },
  medium: {
    type: 'body',
    detail: 'large',
  },
  large: {
    type: 'title',
    detail: 'large',
  },
};

export const Link = ({
  to,
  fontSize = 'medium',
  color = 'onSurface',
  children,
  textDecoration = 'underline',
}: LinkProps) => {
  return (
    <Wrapper
      to={to}
      type={fontSizes[fontSize].type}
      detail={fontSizes[fontSize].detail}
      color={color}
      textDecoration={textDecoration}
    >
      {children}
    </Wrapper>
  );
};
