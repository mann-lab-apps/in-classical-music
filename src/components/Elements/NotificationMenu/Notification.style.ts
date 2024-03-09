import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  display: flex;
  padding: 5px 10px;
`;

export const Image = styled.img`
  width: 60px;
  aspect-ratio: 1/1;

  border-radius: 5px;
  object-fit: cover;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  margin-left: 10px;
`;

export const Title = styled.h5`
  font-size: ${(props) => props.theme.typography.sizes.body.medium.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.body.medium.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.body.medium.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.medium.letterSpacing};
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.typography.sizes.body.medium.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.body.medium.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.body.medium.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.medium.letterSpacing};
`;

export const Infomation = styled.span`
  color: ${(props) => props.theme.colors.schemes.light.secondary};
  font-size: ${(props) => props.theme.typography.sizes.body.small.fontSize};
  font-weight: ${(props) => props.theme.typography.sizes.body.small.fontWeight};
  line-height: ${(props) => props.theme.typography.sizes.body.small.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.small.letterSpacing};
`;
