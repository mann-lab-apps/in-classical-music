import { Column, Wrapper } from './Button.style';

type ButtonProps = {
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  variant?: keyof typeof variants;
  fontSize?: keyof typeof fontSizes;
  padding?: string;
  isDisabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
  flexDirection?: 'column' | 'row';
  gap?: string;
  borderRadius?: string;
  form?: string;
};

const variants = {
  primary: {
    color: 'onPrimary',
    backgroundColor: 'primary',
    hoveredBackgroundColor: 'inversePrimary',
  },
  primaryContainer: {
    color: 'onPirmaryContainer',
    backgroundColor: 'primaryContainer',
    hoveredBackgroundColor: 'primaryFixedDim',
  },
  secondary: {
    color: 'onSecondary',
    backgroundColor: 'secondary',
    hoveredBackgroundColor: 'inverseSecondary',
  },
  secondaryContainer: {
    color: 'onSecondaryContainer',
    backgroundColor: 'secondaryContainer',
    hoveredBackgroundColor: 'inverseSecondary',
  },
  surface: {
    color: 'onSurface',
    backgroundColor: 'surface',
    hoveredBackgroundColor: 'surfaceContainer',
  },
  error: {
    color: 'onError',
    backgroundColor: 'error',
    hoveredBackgroundColor: 'none',
  },
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

export const Button = ({
  startIcon,
  children,
  endIcon,
  onClick,
  variant = 'surface',
  padding = '0',
  fontSize = 'medium',
  isDisabled = false,
  type = 'submit',
  flexDirection = 'row',
  gap = '0px',
  borderRadius = '5px',
  form,
}: ButtonProps) => {
  return (
    <Wrapper
      onClick={onClick}
      backgroundColor={variants[variant].backgroundColor}
      hoveredBackgroundColor={variants[variant].hoveredBackgroundColor}
      padding={padding}
      disabled={isDisabled}
      type={type}
      flexDirection={flexDirection}
      gap={gap}
      borderRadius={borderRadius}
      form={form}
    >
      <Column
        color={variants[variant].color}
        type={fontSizes[fontSize].type}
        detail={fontSizes[fontSize].detail}
      >
        {startIcon}
      </Column>
      <Column
        color={variants[variant].color}
        type={fontSizes[fontSize].type}
        detail={fontSizes[fontSize].detail}
      >
        {children}
      </Column>
      <Column
        color={variants[variant].color}
        type={fontSizes[fontSize].type}
        detail={fontSizes[fontSize].detail}
      >
        {endIcon}
      </Column>
    </Wrapper>
  );
};
