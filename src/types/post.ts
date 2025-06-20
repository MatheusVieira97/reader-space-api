export interface Post {
  author: string;
  content: string;
  created_at: string;
  id: number;
  title: string;
  updated_at: string;
}

export interface PostsResponse {
  data: Post[];
  message: string;
}
