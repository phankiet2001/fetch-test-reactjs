import { FC, PropsWithChildren } from "react";

interface TypographyProps {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  tag: Tag = 'p',
  className,
  children,
}) => {
  return <Tag className={className}>{children}</Tag>;
};

export default Typography;
