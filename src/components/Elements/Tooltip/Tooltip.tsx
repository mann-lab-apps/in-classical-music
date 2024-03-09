import { Text, Wrapper } from './Tooltip.style';

type TooltipProps = {
  children: React.ReactNode;
  text: string;
  horizontalPosition?: 'left' | 'center' | 'right';
  verticalPosition?: 'top' | 'bottom';
};

export const Tooltip = ({
  children,
  text,
  horizontalPosition = 'center',
  verticalPosition = 'bottom',
}: TooltipProps) => {
  return (
    <Wrapper>
      {children}
      <Text
        horizontalPosition={horizontalPosition}
        verticalPosition={verticalPosition}
      >
        {text}
      </Text>
    </Wrapper>
  );
};
