import { FC, HTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`bg-deep-blue rounded-md text-white w-full py-4 text-lg font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
