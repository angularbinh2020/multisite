import INodeDetail from "models/INodeDetail";
import axios from "axios";
import API_URL from "const/api-url";
import IPageNode from "models/IPageNode";

function getPageNodeDetail(nodeId: number): Promise<IPageNode> {
  return new Promise((resolve, reject) => {
    const apiUrl = API_URL.GET_NODE_CONTENT_BY_NODE_ID + nodeId;
    axios
      .get(apiUrl)
      .then((res) => {
        if (res.data) {
          resolve(res.data);
          return;
        }
        reject("getPageNodeDetail error: response data empty");
      })
      .catch(reject);
  });
}

export default getPageNodeDetail