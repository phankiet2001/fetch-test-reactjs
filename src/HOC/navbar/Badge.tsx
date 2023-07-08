import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  showBadge?: boolean;
}

const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  children,
  className,
  showBadge = false,
  ...props
}) => {
  return (
    <div className={`relative ${className}`} {...props}>
      {children}
      {showBadge && (
        <div className="absolute bg-red-500 h-4 w-4 rounded-full right-0 top-0" />
      )}
    </div>
  );
};

export default Badge;
