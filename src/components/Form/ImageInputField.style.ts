import styled from 'styled-components';

export const LabelComponent = styled.div`
  width: 150px;
  aspect-ratio: 1/1;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.schemes.light.secondary};
  color: ${(props) => props.theme.colors.schemes.light.onSecondary};

  cursor: pointer;

  font-size: ${(props) => props.theme.typography.sizes.label.medium.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.label.medium.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.label.medium.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.label.medium.letterSpacing};

  &:hover {
    background-color: ${(props) => props.theme.colors.schemes.light.primary};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
