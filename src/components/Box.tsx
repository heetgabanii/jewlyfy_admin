import { ReactNode, CSSProperties } from 'react';

interface BoxProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  padding?: string | number;
  margin?: string | number;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  display?: CSSProperties['display'];
  flexDirection?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  gap?: string | number;
}

const Box = ({
  children,
  className = '',
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
    ...style,
  };

  return (
    <div className={className} style={boxStyles}>
      {children}
    </div>
  );
};

export default Box;