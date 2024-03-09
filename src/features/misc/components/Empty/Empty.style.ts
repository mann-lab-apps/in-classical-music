import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Phrase = styled.p`
  text-align: center;
  white-space: pre-wrap;
`;
