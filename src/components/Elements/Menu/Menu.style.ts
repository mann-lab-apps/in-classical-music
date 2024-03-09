import styled from 'styled-components';

type WrapperProps = {
  isOpen: boolean;
};

type OverlayProps = {
  isOpen: boolean;
};

type ContentsProps = {
  isOpen: boolean;
  isLeft: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  z-index: ${(props) => (props.isOpen ? 5 : 1)};
`;

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.4;
  z-index: 5;

  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.isOpen ? 'block' : 'none')};

  background-color: ${(props) => props.theme.colors.schemes.light.shadow};
`;

export const TriggerWrapper = styled.div`
  position: relative;
  z-index: 4;
`;

export const Contents = styled.div<ContentsProps>`
  position: absolute;
  top: 110%;
  ${(props) => (props.isLeft ? 'left:0' : 'right:0')};
  z-index: 5;

  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
`;
