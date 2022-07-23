const API_URL = {
  GET_ALL_ROOT_SITE: "api/content/GetRootNodes",
  GET_CHILD_NODES_BY_NODE_ID: `api/content/GetChildNodesById?alias="page"&nodeid=`,
  GET_NODE_CONTENT_BY_NODE_ID: "api/content/",
  GET_ALL_PAGES_BY_SITE_ID: "api/content/Descendant?rootId=",
};

for (let property in API_URL) {
  API_URL[property as keyof typeof API_URL] =
    process.env.API_HOST + API_URL[property as keyof typeof API_URL];
}

export default API_URL;
