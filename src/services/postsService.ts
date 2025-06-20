import { IPostsRepository, PostsRepository } from '../repositories/posts.repository.js';

export class PostsService {
  private postsRepository: IPostsRepository;

  constructor(postsRepository?: IPostsRepository) {
    this.postsRepository = postsRepository ?? new PostsRepository();
  }

  async getAllPosts() {
    try {
      const posts = await this.postsRepository.getAllPosts();
      return posts;
    } catch {
      throw new Error('Failed to retrieve posts');
    }
  }
}
