import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 200px;
  border-radius: 5px;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.schemes.light.surface};
`;
