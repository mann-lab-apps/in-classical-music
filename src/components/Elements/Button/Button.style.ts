import styled from 'styled-components';

type WrapperProps = {
  backgroundColor: string;
  hoveredBackgroundColor: string;
  padding: string;
  flexDirection: 'column' | 'row';
  gap: string;
  borderRadius: string;
};

type ColumnProps = {
  color: string;
  type: string;
  detail: string;
};

export const Wrapper = styled.button<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.gap};

  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};

  background-color: ${(props) =>
    props.theme.colors.schemes.light[props.backgroundColor]};

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.schemes.light[props.hoveredBackgroundColor]};
  }
`;

export const Column = styled.span<ColumnProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.theme.colors.schemes.light[props.color]};
  font-size: ${(props) =>
    props.theme.typography.sizes[props.type][props.detail].fontSize};
`;
