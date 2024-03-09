import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr 50px;
  align-items: center;
  gap: 5px;

  border-top: ${(props) =>
    `0.5px solid ${props.theme.colors.schemes.light.outlineVariant}`};
  padding: 15px;

  background-color: ${(props) => props.theme.colors.schemes.light.surface};
`;

export const ButtonWrapper = styled.div``;
