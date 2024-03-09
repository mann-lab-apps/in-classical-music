import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 15px;
  border-top: ${(props) =>
    `1px solid ${props.theme.colors.schemes.light.outlineVariant}`};
  background-color: ${(props) =>
    props.theme.colors.schemes.light.secondaryContainer};
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Copyright = styled.p`
  color: ${(props) => props.theme.colors.schemes.light.onSecondaryContainer};
  font-size: ${(props) => props.theme.typography.sizes.body.medium.fontSize};
  font-family: ${(props) => props.theme.typography.fonts.notoSansKr.fontFamily};
  font-style: ${(props) => props.theme.typography.fonts.notoSansKr.fontStyle};
`;
