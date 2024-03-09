import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100vh;

  padding: 50px 0 0;

  background-color: ${(props) => props.theme.colors.schemes.light.surface};
`;

export const Title = styled.h2`
  white-space: nowrap;
`;
