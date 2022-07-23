import IContext from "models/IContext";
import INodeDetail from "models/INodeDetail";
import { getAllSite, getAllPages } from "apis/server";

function getNodeDetailByContent(context: IContext): Promise<INodeDetail> {
  return new Promise((resolve, reject) => {
    if (context?.params?.slug?.length) {
      getAllSite()
        .then((sites) => {
          const site = context.params.slug[0];
          const siteId = sites.find(
            (siteData) => site === siteData.urlSegment
          )?.id;
          const pageUrl = context.params.slug
            .filter((slug, index) => index !== 0)
            .join("/");
          if (siteId) {
            getAllPages(siteId)
              .then((pages) => {
                const pageNodeId = pages.find(
                  (page) => page.umbracoUrlAlias === pageUrl
                )?.id;
                if (pageNodeId) {
                  resolve({
                    site,
                    nodeId: pageNodeId,
                  });
                  return;
                }

                reject(
                  `getNodeDetailByContent error: can't find page node id for ${pageUrl} at site ${site}.`
                );
              })
              .catch(reject);
            return;
          }

          reject(
            `getNodeDetailByContent error: can't parse url format - site did not exist.`
          );
        })
        .catch(reject);
      return;
    }

    reject(`getNodeDetailByContent error: slug must be string array.`);
  });
}

export default getNodeDetailByContent;
