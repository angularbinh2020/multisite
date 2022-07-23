import React from "react";
import dynamic from "next/dynamic";
import DefaultMissingBlock from "components/DefaultMissingBlock";
import { IBlock } from "models/blocks/IBlock";
import SITES from "const/sites";

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
  [SITES.MOGIVI]: MogiviBlockRender,
  [SITES.NHA_THAT]: NhaThatBlockRender,
};

const BlockRender = (props: BlockRenderProps) => {
  const Component = BlockComponent[props.site] || DefaultMissingBlock;

  return <Component {...props} />;
};

export default BlockRender;
