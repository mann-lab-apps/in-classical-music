import styled from 'styled-components';

type OverlayProps = {
  isOpen: boolean;
};

type ContentsProps = {
  isOpen: boolean;
};

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
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.div<ContentsProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;

  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
`;
