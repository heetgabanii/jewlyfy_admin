import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const GoogleIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 533.5 544.3"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#4285f4"
        d="M533.5 278.4c0-18.6-1.5-37.2-4.7-55.1H272v104.2h146.9c-6.3 34.6-25.2 63.9-53.8 83.5v69.2h86.9c50.7-46.7 81.5-115.5 81.5-201.8z"
      />
      <path
        fill="#34a853"
        d="M272 544.3c72.6 0 133.5-24.1 178-65.5l-86.9-69.2c-24.1 16.2-55 25.7-91.1 25.7-69.9 0-129.1-47.2-150.3-110.5H32v69.7c44.5 88.3 136.7 149.8 240 149.8z"
      />
      <path
        fill="#fbbc04"
        d="M121.7 324.8c-10.6-31.8-10.6-66.1 0-97.9V157.2H32c-40.2 79.4-40.2 173.5 0 252.9l89.7-69.3z"
      />
      <path
        fill="#ea4335"
        d="M272 107.7c39.4-.6 77.1 14.4 105.9 41.6l79.1-79.1C409.5 25.6 342.5-1.6 272 0 168.7 0 76.5 61.5 32 149.8l89.7 69.7C142.9 154.9 202.1 107.7 272 107.7z"
      />
    </svg>
  );
};

export default GoogleIcon;
