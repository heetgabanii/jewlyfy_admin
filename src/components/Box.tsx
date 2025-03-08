import { ReactNode, CSSProperties, MouseEventHandler } from "react";

interface BoxProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  padding?: string | number;
  margin?: string | number;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  display?: CSSProperties["display"];
  flexDirection?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  gap?: string | number;
  onClick?: MouseEventHandler<HTMLDivElement>; // ✅ Added onClick support
}

const Box = ({
  children,
  className = "",
  style = {},
  padding,
  margin,
  width,
  height,
  backgroundColor,
  display,
  flexDirection,
  alignItems,
  justifyContent,
  gap,
  onClick, // ✅ Now accepting onClick
}: BoxProps) => {
  const boxStyles: CSSProperties = {
    padding,
    margin,
    width,
    height,
    backgroundColor,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    gap,
    cursor: onClick ? "pointer" : undefined, // ✅ Show pointer cursor if clickable
    ...style,
  };

  return (
    <div className={className} style={boxStyles} onClick={onClick}>
      {children}
    </div>
  );
};

export default Box;
