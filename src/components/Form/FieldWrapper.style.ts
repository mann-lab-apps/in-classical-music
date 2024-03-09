import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: ${(props) => props.theme.typography.sizes.body.large.fontSize};
  font-weight: ${(props) => props.theme.typography.sizes.body.large.fontWeight};
  line-height: ${(props) => props.theme.typography.sizes.body.large.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.large.letterSpacing};

  font-family: ${(props) => props.theme.typography.fonts.notoSansKr.fontFamily};
  font-style: ${(props) => props.theme.typography.fonts.notoSansKr.fontStyle};
`;

export const InputWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
`;

export const Error = styled.span``;
