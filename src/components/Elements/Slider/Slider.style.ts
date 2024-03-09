import styled from 'styled-components';

type WrapperProps = {
  direction: 'column' | 'row';
  gap: string;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  flex-wrap: nowrap;

  overflow: hidden;
  overflow-x: scroll;
  overflow-y: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;
