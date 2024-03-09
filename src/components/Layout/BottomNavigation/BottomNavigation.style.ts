import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 15px 15px 60px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  background-color: ${(props) => props.theme.colors.schemes.light.surface};
  border-top: ${(props) =>
    `1px solid ${props.theme.colors.schemes.light.outlineVariant}`};
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
