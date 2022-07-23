import React from "react";
import dynamic from "next/dynamic";
import { DomainRedirectConfig } from "domain.config";
import DefaultMissingBlock from "components/DefaultMissingBlock";
import { IBlock } from "models/blocks/IBlock";

const MogiviBlockRender = dynamic(
  () => import("sites/mogivi/components/BlockRender")
);
const NhaThatBlockRender = dynamic(
  () => import("sites/nhathat/components/BlockRender")
);

interface BlockRenderProps {
  site: string;
  block?: IBlock;
}

const BlockComponent = {
  [DomainRedirectConfig["mogivi.vn"]]: MogiviBlockRender,
  [DomainRedirectConfig["nhathat.vn"]]: NhaThatBlockRender,
};

const BlockRender = (props: BlockRenderProps) => {
  const Component = BlockComponent[props.site] || DefaultMissingBlock;

  return <Component {...props} />;
};

export default BlockRender;
