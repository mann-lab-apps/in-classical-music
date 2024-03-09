import { Wrapper } from './Slider.style';

type SliderProps = {
  children: React.ReactNode;
  direction?: 'column' | 'row';
  gap?: string;
};

export const Slider = ({
  children,
  direction = 'row',
  gap = '5px',
}: SliderProps) => {
  return (
    <Wrapper direction={direction} gap={gap}>
      {children}
    </Wrapper>
  );
};
