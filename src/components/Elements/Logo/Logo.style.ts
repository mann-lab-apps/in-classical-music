import styled from 'styled-components';

type ContentProps = {
  type: string;
  //   type: 'display' | 'headline' | 'title' | 'body' | 'label';
  detail: string;
  //   detail: 'large' | 'medium' | 'small';
};

export const Content = styled.span<ContentProps>`
  border-radius: 50%;
  font-size: ${(props) =>
    props.theme.typography.sizes[props.type][props.detail].fontSize};
  font-family: ${(props) => props.theme.typography.fonts.nanumPen.fontFamily};
  font-style: ${(props) => props.theme.typography.fonts.nanumPen.fontStyle};
`;
