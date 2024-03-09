import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Notifications = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 5px;
  padding: 15px;

  background-color: ${(props) => props.theme.colors.schemes.light.surface};
`;
