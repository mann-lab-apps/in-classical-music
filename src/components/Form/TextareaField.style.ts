import styled from 'styled-components';

type TextareaProps = {
  borderRadius: string;
  padding: string;
};

export const Textarea = styled.textarea<TextareaProps>`
  height: 20vh;

  border: ${(props) => `1px solid ${props.theme.colors.schemes.light.outline}`};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};

  font-size: ${(props) => props.theme.typography.sizes.title.medium.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.title.medium.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.title.medium.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.title.medium.letterSpacing};

  font-family: ${(props) => props.theme.typography.fonts.notoSansKr.fontFamily};
  font-style: ${(props) => props.theme.typography.fonts.notoSansKr.fontStyle};

  resize: none;
  outline: none;
`;
