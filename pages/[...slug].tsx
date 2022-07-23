import type { NextPage } from "next";
import axios from "axios";
import API_URL from "const/api-url";
import ISiteNode from "models/ISiteNode";
import { DomainRedirectConfig } from "domain.config";
import IContext from "models/IContext";
import getNodeDetailByContent from "utils/getNodeIdByContex";
import getPageNodeDetail from "utils/getPageNodeDetail";
import Layout from "components/Layout";
import IPageNode from "models/IPageNode";
import useViewMode from "hooks/useViewMode";
import IPath from "models/IPath";
import { getAllPaths } from "apis/server";
import logger from "utils/logger";
import IPageData from "models/IPageData";
import BlockRender from "components/BlockRender";

interface DefaultPageProps {
  site: string;
  pageData: IPageData;
}

const DefaultPage: NextPage<DefaultPageProps> = (props: DefaultPageProps) => {
  const { site, pageData } = props;
  const { isDesktop, isMobile, isMobileApp } = useViewMode();
  return (
    <Layout site={site} pageData={pageData}>
      {pageData?.currentNode?.fields?.blocks?.map((block) => (
        <BlockRender
          site={site}
          block={block}
          key={`block-id-${block.system.id}`}
        />
      ))}
    </Layout>
  );
};

export async function getStaticProps(context: IContext) {
  const { nodeId, site } = await getNodeDetailByContent(context);
  const pageData = await getPageNodeDetail(nodeId);
  return {
    props: {
      pageData,
      site,
    },
  };
}

export async function getStaticPaths() {
  logger.info("Start get paths");
  let paths: IPath[] = [];
  try {
    paths = await getAllPaths();
  } catch (e) {
    logger.error(e);
  }

  logger.info("Get paths completed");

  return {
    paths: paths,
    fallback: false,
  };
}

export default DefaultPage;
