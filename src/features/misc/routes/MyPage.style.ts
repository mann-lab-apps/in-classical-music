import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;
`;

export const Line = styled.div`
  width: 90%;
  height: 0.5px;

  margin: 0 auto;

  background-color: ${(props) =>
    props.theme.colors.schemes.light.outlineVariant};
`;
