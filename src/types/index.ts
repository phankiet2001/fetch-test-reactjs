import React, { ReactNode } from "react";

export type Article = {
  asset: ReactNode;
  title?: string;
  content?: string;
  contentComponent?: ReactNode;
  titleComponent?: ReactNode;
  id: number;
};
