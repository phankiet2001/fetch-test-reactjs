import { FC, HTMLAttributes } from "react";

const ProcessBar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      className="w-full h-1 bg-grey rounded-lg relative overflow-hidden"
      {...props}
    >
      <div className="absolute top-0 left-0 h-1 bg-blue-dark rounded-e-lg w-[70%] text-xs" />
    </div>
  );
};

export default ProcessBar;
