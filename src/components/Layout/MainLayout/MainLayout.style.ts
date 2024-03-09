import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: 100vh;

  padding: 50px 0 75px;

  background-color: ${(props) => props.theme.colors.schemes.light.surface};
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Inner = styled.section`
  height: 82vh;
  box-sizing: border-box;
  padding: 15px;
`;
