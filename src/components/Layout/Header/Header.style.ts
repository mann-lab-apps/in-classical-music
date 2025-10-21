import styled from "styled-components";

type ColumnProps = {
  justifyContent?: "start" | "center" | "end";
};

export const Wrapper = styled.header`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 50px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  border-bottom: ${(props) =>
    `1px solid ${props.theme.colors.schemes.light.outlineVariant}`};

  background-color: ${(props) => props.theme.colors.schemes.light.surface};
  padding: 10px;
`;

export const Column = styled.div<ColumnProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  white-space: nowrap;
`;
