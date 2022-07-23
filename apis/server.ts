import IPage from "models/IPage";
import ISiteNode from "models/ISiteNode";
import IPath from "models/IPath";

import axios from "axios";
import API_URL from "../const/api-url";

export function getAllPages(siteId: number): Promise<IPage[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL.GET_ALL_PAGES_BY_SITE_ID + siteId)
      .then((res) => {
        if (res.data) {
          resolve(res.data);
          return;
        }
        reject("getAllPages error: Data empty");
      })
      .catch(reject);
  });
}

export function getAllSite(): Promise<ISiteNode[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL.GET_ALL_ROOT_SITE)
      .then((res) => {
        if (res.data) {
          resolve(res.data);
          return;
        }
        reject("getAllSite error: Data empty");
      })
      .catch(reject);
  });
}

export function getAllPaths(): Promise<IPath[]> {
  return new Promise((resolve, reject) => {
    getAllSite()
      .then((sites) => {
        let completedThreats: number = 0;
        const paths: IPath[] = [];
        sites.forEach((site) => {
          getAllPages(site.id)
            .then((pages) => {
              pages.forEach((page) => {
                const slug = page.umbracoUrlAlias.split("/");
                slug.unshift(site.urlSegment);
                paths.push({
                  params: {
                    slug: slug,
                  },
                });
              });
              completedThreats++;
              const isCompletedAll = completedThreats === sites.length;
              if (isCompletedAll) resolve(paths);
            })
            .catch(reject);
        });
      })
      .catch(reject);
  });
}
