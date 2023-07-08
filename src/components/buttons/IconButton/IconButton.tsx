import { FC, HTMLAttributes, PropsWithChildren } from "react";

type IconButtonProps = HTMLAttributes<HTMLButtonElement>;

const IconButton: FC<PropsWithChildren<IconButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`h-10 w-10 rounded-full bg-white flex items-center justify-center p-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
