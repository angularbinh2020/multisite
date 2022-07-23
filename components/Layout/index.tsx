import DefaultMissingBlock from "components/DefaultMissingBlock";
import ILayoutProps from "models/ILayoutProps";
import React from "react";
import dynamic from "next/dynamic";
import SITES from "const/sites";

const MogiviLayout = dynamic(() => import("sites/mogivi/layout"));
const NhaThatLayout = dynamic(() => import("sites/nhathat/layout"));

const LayoutComponent = {
  [SITES.MOGIVI]: MogiviLayout,
  [SITES.NHA_THAT]: NhaThatLayout,
};

const Layout = (props: ILayoutProps) => {
  const { site, children, ...restProps } = props;
  const Component = LayoutComponent[site] || DefaultMissingBlock;
  return (
    <Component site={site} {...restProps}>
      {children}
    </Component>
  );
};

export default Layout;
