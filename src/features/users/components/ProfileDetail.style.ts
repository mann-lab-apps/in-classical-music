import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  padding: 30px 0 0;
`;

export const Image = styled.img`
  width: 50%;
  max-width: 450px;
  min-width: 300px;
  aspect-ratio: 1/1;

  border-radius: 50%;

  object-fit: cover;
`;

export const Information = styled.span`
  color: ${(props) => props.theme.colors.schemes.light.onSurface};
  font-size: ${(props) => props.theme.typography.sizes.body.large.fontSize};
  font-weight: ${(props) => props.theme.typography.sizes.body.large.fontWeight};
  line-height: ${(props) => props.theme.typography.sizes.body.large.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.large.letterSpacing};
`;

export const Label = styled.span`
  margin-right: 10px;

  color: ${(props) => props.theme.colors.schemes.light.onSurface};
  font-size: ${(props) => props.theme.typography.sizes.body.large.fontSize};
  font-weight: ${(props) => props.theme.typography.sizes.body.large.fontWeight};
  line-height: ${(props) => props.theme.typography.sizes.body.large.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.large.letterSpacing};
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
