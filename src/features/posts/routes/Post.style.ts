import styled from 'styled-components';

export const Wrapper = styled.section``;

export const Image = styled.img`
  width: 100%;
  height: 40vh;

  object-fit: cover;
`;

export const PostInformation = styled.div`
  padding: 15px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 5px;
`;

export const Tag = styled.span`
  border-radius: 5px;
  padding: 2px;

  color: ${(props) => props.theme.colors.schemes.light.onPrimaryContainer};
  background-color: ${(props) =>
    props.theme.colors.schemes.light.primaryContainer};
  font-size: ${(props) => props.theme.typography.sizes.label.medium.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.label.medium.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.label.medium.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.label.medium.letterSpacing};
`;

export const AboutPost = styled.span`
  color: ${(props) => props.theme.colors.schemes.light.secondary};
  font-size: ${(props) => props.theme.typography.sizes.body.small.fontSize};
  font-weight: ${(props) => props.theme.typography.sizes.body.small.fontWeight};
  line-height: ${(props) => props.theme.typography.sizes.body.small.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.small.letterSpacing};
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.schemes.light.onSurface};
  font-size: ${(props) => props.theme.typography.sizes.body.medium.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.body.medium.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.body.medium.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.medium.letterSpacing};
  white-space: pre-wrap;
`;
