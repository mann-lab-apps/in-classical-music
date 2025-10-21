import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 800px;
  height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  margin: 0 auto;

  background-color: ${(props) => props.theme.colors.schemes.light.surface};
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Inner = styled.section`
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  overflow-y: scroll;
`;
