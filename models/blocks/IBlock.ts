export interface IBlock {
  system: {
    contentType: string;
    id: string;
    urlSegment?: string;
    editedAt?: string;
  };
  fields: {
    title?: string;
    content?: string;
    metaKeywords?: string;
    metaDescription?: string;
    pageTitle?: string;
    items?: {
      fields: {
        question: string;
        answer: string;
      };
    }[];
    blocks?: IBlock[];
    startDate?: string;
  };
}
