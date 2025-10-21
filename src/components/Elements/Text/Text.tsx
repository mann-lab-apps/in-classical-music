import { ReactElement } from "react";
import { Wrapper } from "./Text.style";

export type TextProps = {
  children: ReactElement;
  variant: "system" | "handWriting";
  size: keyof typeof sizes;
  isBold: true | false;
  isPreWrap: true | false;
  className: string;
};

export const Text = ({
  children,
  variant = "system",
  size = "body",
  isBold = false,
  isPreWrap = false,
  className,
}: TextProps) => {
  const props = { variant, size, isBold, isPreWrap, className };
  return <Wrapper {...props}>{children}</Wrapper>;
};

export const sizes = {
  largeTitle: "34px",
  title1: "28px",
  title2: "22px",
  title3: "20px",
  headline: "17px",
  body: "17px",
  callout: "16px",
  subheadline: "15px",
  footnote: "13px",
  caption1: "12px",
  caption2: "11px",
};
