import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  background-color: ${(props) => props.theme.colors.schemes.light.surface};

  border-radius: 5px;
  padding: 15px;
`;

export const Description = styled.p`
  margin: 0 auto;

  white-space: pre-wrap;
  text-align: center;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;
