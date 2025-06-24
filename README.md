# Reader Space API

A modern, high-performance REST API built with Node.js, TypeScript, and Express for the Reader Space application. This API provides article management capabilities with caching, pagination, and comprehensive error handling.

## 🚀 Features

- **TypeScript**
- **Express.js**
- **SQLite**
- **Caching**
- **Pagination**
- **CORS**
- **Testing**
- **Docker**
- **Code Quality**
- **Hot Reload**

## 📋 Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 8.x or higher
- **Docker**: 20.x or higher (optional, for containerized development)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:MatheusVieira97/reader-space-api.git
   cd reader-space-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create environment file .env

   # Edit with your configuration with:
   NODE_ENV="development"
   ```

## 🚀 Quick Start

### Local Development Without Docker (Not Recommended)

Start the development server with hot reload:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Production Build

Build and run the production server:

```bash
npm run build
npm start
```

## 🐳 Docker Development

### Using Docker Compose (Recommended)

Run the development environment:

```bash
docker compose build api-dev
docker compose up api-dev -d
```

Run the production environment:

```bash
docker compose up api-prod
```

Run both environments simultaneously:

```bash
docker compose up
```

**Service URLs:**

- Development API: `http://localhost:3000`

Stop all services:

```bash
docker-compose down
```

## 📚 API Documentation

### Base URL

```
http://localhost:3000/api
```

### Endpoints

#### Get All Articles

```http
GET /api/articles
```

**Cache:** 2 minutes
**Query Parameters:**

- `limit` (number, optional): Number of articles per page (default: 10)
- `page` (number, optional): Page number (default: 1)
- `tag` (string, optional): Filter articles by tag

**Response:**

```json
{
  "data": [
    {
      "id": 1,
      "title": "Article Title",
      "content": "Article content...",
      "author": "Author Name",
      "tag": "technology",
      "image_url": "https://example.com/image.jpg",
      "created_at": "2024-01-01T00:00:00.000Z",
      "updated_at": "2024-01-01T00:00:00.000Z",
      "published_at": "2024-01-01T00:00:00.000Z"
    }
  ],
  "page": 1,
  "totalItems": 100,
  "totalPages": 10
}
```

#### Get Article by ID

```http
GET /api/articles/:id
```

**Cache:** 5 minutes
**Response:**

```json
{
  "data": {
    "id": 1,
    "title": "Article Title",
    "content": "Article content...",
    "author": "Author Name",
    "tag": "technology",
    "image_url": "https://example.com/image.jpg",
    "created_at": "2024-01-01T00:00:00.000Z",
    "updated_at": "2024-01-01T00:00:00.000Z",
    "published_at": "2024-01-01T00:00:00.000Z"
  },
  "message": "Article retrieved successfully"
}
```

### Error Responses

**400 Bad Request:**

```json
{
  "error": "Invalid request parameters",
  "message": "Detailed error message"
}
```

**404 Not Found:**

```json
{
  "error": "Article not found",
  "message": "Article with ID 123 does not exist"
}
```

**500 Internal Server Error:**

```json
{
  "error": "Internal server error",
  "message": "An unexpected error occurred"
}
```

## 🧪 Testing

### Run Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run coverage
```

## 🔧 Development Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start development server with hot reload |
| `npm run build`        | Compile TypeScript to JavaScript         |
| `npm start`            | Start production server                  |
| `npm run type-check`   | Run TypeScript type checking             |
| `npm run lint`         | Run ESLint                               |
| `npm run lint:fix`     | Fix ESLint issues automatically          |
| `npm run format`       | Format code with Prettier                |
| `npm run format:check` | Check code formatting                    |
| `npm test`             | Run tests with Vitest                    |
| `npm run test:run`     | Run tests once                           |
| `npm run test:ui`      | Run tests with UI                        |
| `npm run coverage`     | Generate test coverage report            |

### IDE Setup

**VS Code Extensions:**

- ESLint
- Prettier
- TypeScript Importer

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build process or auxiliary tool changes

## 👨‍💻 Author

**Matheus Vieira**

**Happy Coding! 🚀**
