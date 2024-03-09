import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.schemes.light.surface};
`;
