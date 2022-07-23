import ILayoutProps from "models/ILayoutProps";
import React from "react";

const MogiviLayout = (props: ILayoutProps) => {
  const { children } = props;
  return <div data-layout="mogivi">{children}</div>;
};

export default MogiviLayout;
