import { Typography } from "@/components/typography";
import { FC, HTMLAttributes, ReactNode } from "react";

interface ArticleProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  assetComponent: ReactNode;
  content?: string;
  contentComponent?: ReactNode;
  titleComponent?: ReactNode;
}

const Article: FC<ArticleProps> = ({
  title,
  titleComponent,
  className,
  assetComponent,
  contentComponent,
  content,
  ...props
}) => {
  return (
    <div
      className={`h-64 min-w-[200px] w-[200px] border border-article rounded-md overflow-hidden shadow-coin-balance ${className}`}
      {...props}
    >
      <div className="mb-6">{assetComponent}</div>
      <div className="px-4">
        <Typography tag="h2" className="text-blue-dark font-semibold mb-2">
          {titleComponent ?? title}
        </Typography>
        <div className="text-body">
          {contentComponent || content}
        </div>
      </div>
    </div>
  );
};

export default Article;
