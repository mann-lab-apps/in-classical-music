import styled from 'styled-components';

export const Wrapper = styled.div`
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
  width: 60px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 5px;
`;

export const TextBox = styled.div`
  width: 100%;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  white-space: nowrap;
`;

export const Title = styled.h5`
  font-size: ${(props) => props.theme.typography.sizes.body.large.fontSize};
  font-weight: ${(props) => props.theme.typography.sizes.body.large.fontWeight};
  line-height: ${(props) => props.theme.typography.sizes.body.large.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.large.letterSpacing};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubInformation = styled.span`
  color: ${(props) => props.theme.colors.schemes.light.secondary};
  font-size: ${(props) => props.theme.typography.sizes.label.medium.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.label.medium.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.label.medium.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.label.medium.letterSpacing};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Tags = styled.div`
  display: flex;
  gap: 5px;
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;

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
