import DefaultMissingBlock from "components/DefaultMissingBlock";
import { DomainRedirectConfig } from "domain.config";
import ILayoutProps from "models/ILayoutProps";
import React from "react";
import dynamic from "next/dynamic";

const MogiviLayout = dynamic(() => import("sites/mogivi/layout"));
const NhaThatLayout = dynamic(() => import("sites/nhathat/layout"));

const LayoutComponent = {
  [DomainRedirectConfig["mogivi.vn"]]: MogiviLayout,
  [DomainRedirectConfig["nhathat.vn"]]: NhaThatLayout,
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
