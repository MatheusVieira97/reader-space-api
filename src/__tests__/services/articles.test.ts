import { beforeEach, describe, expect, it, type MockedFunction, vi } from 'vitest';

import { IArticlesRepository } from '../../repositories/articles.repository';
import { ArticlesService } from '../../services/articles';
import { IArticle, IPaginatedArticleResponse } from '../../types/article';

// Mock the database module to prevent actual database connections during tests
vi.mock('../../config/database', () => ({
  default: {
    all: vi.fn(),
    get: vi.fn(),
    run: vi.fn(),
    serialize: vi.fn((callback: () => void) => {
      callback();
    }),
  },
}));

vi.mock('../../repositories/articles.repository');

describe('ArticlesService', () => {
  let articlesService: ArticlesService;
  let mockRepository: {
    getAllArticles: MockedFunction<IArticlesRepository['getAllArticles']>;
    getArticleById: MockedFunction<IArticlesRepository['getArticleById']>;
  };

  beforeEach(() => {
    vi.clearAllMocks();

    mockRepository = {
      getAllArticles: vi.fn(),
      getArticleById: vi.fn(),
    };

    articlesService = new ArticlesService(mockRepository as IArticlesRepository);
  });

  it('should be defined', () => {
    expect(ArticlesService).toBeDefined();
  });

  it('should return all articles', async () => {
    const mockArticles: IArticle[] = [
      {
        author: 'Test Author 1',
        content: 'Test content 1',
        created_at: '2023-01-01T00:00:00Z',
        id: 1,
        image_url: 'https://example.com/images/nodejs.jpg',
        published_at: '2023-01-01T10:00:00Z',
        tag: 'technology',
        title: 'Test Article 1',
        updated_at: '2023-01-01T00:00:00Z',
      },
      {
        author: 'Test Author 2',
        content: 'Test content 2',
        created_at: '2023-01-02T00:00:00Z',
        id: 2,
        image_url: 'https://example.com/images/typescript.jpg',
        published_at: '2023-01-02T10:00:00Z',
        tag: 'programming',
        title: 'Test Article 2',
        updated_at: '2023-01-02T00:00:00Z',
      },
    ];

    const mockResponse: IPaginatedArticleResponse = {
      data: mockArticles,
      page: 1,
      totalItems: 2,
      totalPages: 1,
    };

    mockRepository.getAllArticles.mockResolvedValue(mockResponse);

    const result = await articlesService.getAllArticles(10, 1);

    expect(mockRepository.getAllArticles).toHaveBeenCalledWith(10, 1);
    expect(result).toEqual(mockResponse);
    expect(result.data).toHaveLength(2);
    expect(result.page).toBe(1);
    expect(result.totalItems).toBe(2);
    expect(result.totalPages).toBe(1);
  });

  it('should return an article by id', async () => {
    const mockArticle: IArticle = {
      author: 'Test Author',
      content: 'Test content',
      created_at: '2023-01-01T00:00:00Z',
      id: 1,
      image_url: 'https://example.com/images/nodejs.jpg',
      published_at: '2023-01-01T10:00:00Z',
      tag: 'technology',
      title: 'Test Article',
      updated_at: '2023-01-01T00:00:00Z',
    };

    mockRepository.getArticleById.mockResolvedValue(mockArticle);

    const result = await articlesService.getArticleById(1);

    expect(mockRepository.getArticleById).toHaveBeenCalledWith(1);
    expect(result).toEqual(mockArticle);
    expect(result.id).toBe(1);
    expect(result.title).toBe('Test Article');
    expect(result.author).toBe('Test Author');
  });
});
