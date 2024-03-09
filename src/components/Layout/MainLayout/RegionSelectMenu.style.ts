import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;

  padding: 10px;
  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.schemes.light.surface};
`;
