import React from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption"
  | "subtitle";

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  color?: string;
  align?: "left" | "center" | "right" | "justify";
  style?: React.CSSProperties;
  onClick?: (
    event: React.MouseEvent<HTMLParagraphElement | HTMLHeadingElement>
  ) => void;
}

const variantClasses: Record<TypographyVariant, string> = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  body1: "text-base",
  body2: "text-sm",
  caption: "text-xs",
  subtitle: "text-sm font-medium",
};

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  className = "",
  color = "inherit",
  align = "left",
  style = {},
  onClick,
}) => {
  const Component = variant.startsWith("h") ? variant : "p";

  const classes = [
    variantClasses[variant],
    `text-${align}`,
    className,
    onClick ? "cursor-pointer" : "",
  ].join(" ");

  return React.createElement(
    Component,
    {
      className: classes,
      style: { color, ...style },
      onClick,
    },
    children
  );
};

export default Typography;
