import styled from "styled-components";
import { sizes, TextProps } from "./Text";

export const Wrapper = styled.span<TextProps>`
  font-size: ${(props) => sizes[props.size]};
  font-family: ${(props) =>
    props.variant === "handWriting" ? "Kalam" : "Pretendard"};
  color: black;
  font-weight: ${(props) => (props.isBold ? "700" : "400")};
  white-space: ${(props) => (props.isPreWrap ? "pre-wrap" : null)};
`;
