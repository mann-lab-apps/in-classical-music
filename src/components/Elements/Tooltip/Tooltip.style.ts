import styled from 'styled-components';

type TextProps = {
  horizontalPosition: 'left' | 'center' | 'right';
  verticalPosition: 'top' | 'bottom';
};

export const Wrapper = styled.div`
  position: relative;

  &:hover {
    p {
      display: block;
    }
  }
`;

export const Text = styled.p<TextProps>`
  position: absolute;
  ${(props) =>
    props.horizontalPosition === 'left'
      ? 'left: 0'
      : props.horizontalPosition === 'center'
      ? 'left: 50%; transform: translateX(-50%)'
      : 'right: 0'};
  bottom: 110%;

  display: none;

  border-radius: 5px;
  padding: 10px;

  background-color: ${(props) => props.theme.colors.schemes.light.secondary};
  color: ${(props) => props.theme.colors.schemes.light.onSecondary};

  font-size: ${(props) => props.theme.typography.sizes.label.small.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.label.small.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.label.small.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.label.small.letterSpacing};

  white-space: nowrap;
`;
