export interface IArticle {
  author: string;
  content: string;
  created_at: string;
  id: number;
  title: string;
  updated_at: string;
}

export interface IArticlesResponse {
  data: IArticle[];
  message: string;
}

export interface IPaginatedArticleResponse {
  data: IArticle[];
  page: number;
  totalItems: number;
  totalPages: number;
}
