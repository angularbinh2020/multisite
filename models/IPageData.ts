import IPageNode from "models/IPageNode";
import { IRootNode } from "./IRootNode";
import { ISiteLanguageNode } from "./ISiteLanguageNode";

interface IPageData {
  currentNode: IPageNode;
  rootNode: IRootNode;
  siteLanguageNode: ISiteLanguageNode;
}

export default IPageData;
