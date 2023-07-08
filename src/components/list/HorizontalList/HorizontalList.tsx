import { FC, HTMLAttributes, ReactNode } from "react";

import { Typography } from "@/components";

interface HorizontalListProps extends HTMLAttributes<HTMLDivElement> {
  renderChild: (i: unknown, index: number) => ReactNode;
  listItems: unknown[];
  title: string;
}

const HorizontalList: FC<HorizontalListProps> = ({
  renderChild,
  listItems,
  title,
  ...props
}) => {
  return (
    <div {...props}>
      <Typography tag="h2" className="py-6 text-lg font-semibold">
        {title}
      </Typography>
      <div className="flex overflow-x-auto scrollbar-hide">
        {listItems.map((i, index) => renderChild(i, index))}
      </div>
    </div>
  );
};

export default HorizontalList;
