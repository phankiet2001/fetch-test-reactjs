import { FC, SVGProps } from "react";

const BoardIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 14L1 8L7 2"
        stroke="#171725"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BoardIcon;
