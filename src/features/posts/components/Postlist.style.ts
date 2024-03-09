import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 0;

  height: 100%;
`;

export const Post = styled.div`
  display: flex;
  gap: 10px;

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
  width: 100px;
  aspect-ratio: 1/1;

  border-radius: 10px;

  object-fit: cover;
`;
export const Infomations = styled.div``;

export const Title = styled.h5``;

export const PostingInfomations = styled.span`
  color: ${(props) => props.theme.colors.schemes.light.secondary};
  font-size: ${(props) => props.theme.typography.sizes.body.small.fontSize};
  font-weight: ${(props) => props.theme.typography.sizes.body.small.fontWeight};
  line-height: ${(props) => props.theme.typography.sizes.body.small.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.small.letterSpacing};
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
