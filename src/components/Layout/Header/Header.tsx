import { Column, Wrapper } from './Header.style';

type HeaderProps = {
  leftColumn: React.ReactNode;
  centerColumn: React.ReactNode;
  rightColumn: React.ReactNode;
};

export const Header = ({
  leftColumn,
  centerColumn,
  rightColumn,
}: HeaderProps) => {
  return (
    <Wrapper>
      <Column justifyContent="start">{leftColumn}</Column>
      <Column justifyContent="center">{centerColumn}</Column>
      <Column justifyContent="end">{rightColumn}</Column>
    </Wrapper>
  );
};
