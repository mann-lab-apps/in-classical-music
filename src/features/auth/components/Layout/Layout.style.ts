import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100vh;

  padding: 70px 15px;

  background-color: ${(props) => props.theme.colors.schemes.light.surface};
`;

export const Heading = styled.h2`
  font-size: ${(props) => props.theme.typography.sizes.headline.large.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.headline.large.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.headline.large.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.headline.large.letterSpacing};

  font-family: ${(props) => props.theme.typography.fonts.notoSansKr.fontFamily};
  font-style: ${(props) => props.theme.typography.fonts.notoSansKr.fontStyle};

  text-align: center;
`;
