import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  border-bottom: ${(props) =>
    `0.5px solid ${props.theme.colors.schemes.light.outlineVariant}`};
  padding: 15px;

  background-color: ${(props) => props.theme.colors.schemes.light.surface};

  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.schemes.light.surfaceContainer};
  }
`;

export const Image = styled.img`
  width: 60px;
  aspect-ratio: 1/1;

  border-radius: 50%;

  object-fit: cover;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.span`
  color: ${(props) => props.theme.colors.schemes.light.onSurface};
  font-size: ${(props) => props.theme.typography.sizes.body.medium.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.body.medium.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.body.medium.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.medium.letterSpacing};
`;

export const Email = styled.span`
  color: ${(props) => props.theme.colors.schemes.light.onSurface};
  font-size: ${(props) => props.theme.typography.sizes.body.medium.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.body.medium.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.body.medium.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.medium.letterSpacing};
`;
