export interface IArticle {
  author: string;
  content: string;
  created_at: string;
  id: number;
  image_url?: string;
  published_at?: string;
  tag?: string;
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
