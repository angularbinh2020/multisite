import React from "react";

interface BlockRenderProps {
  site: string;
  props?: any;
}

const MogiviBlockRender = (props: BlockRenderProps) => {
  return <div>mogivi block</div>;
};

export default MogiviBlockRender;
