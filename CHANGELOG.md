# 1.0.0 (2025-06-24)


### Bug Fixes

* change port type to number and update app.listen to bind to all interfaces ([69da6a1](https://github.com/MatheusVieira97/reader-space-api/commit/69da6a15c6e90b5d8498708164e98fba040c468f))
* remove dotenv import and enhance CORS configuration to include development origins dynamically ([8db4d2d](https://github.com/MatheusVieira97/reader-space-api/commit/8db4d2dfa87010db2dc81e0b31caa2b5583e7286))


### Features

* add articles route and remove posts route for article management ([0794cd6](https://github.com/MatheusVieira97/reader-space-api/commit/0794cd605ab6ec7e90e86112eba3918408cd6b75))
* add ArticlesController to manage article retrieval and replace PostsController ([dc6126e](https://github.com/MatheusVieira97/reader-space-api/commit/dc6126e07cce25c2d9f6193d075a431a0b651d1f))
* add ArticlesRepository for article retrieval ([3154b56](https://github.com/MatheusVieira97/reader-space-api/commit/3154b561623a7428253a7932ba6cac5318b94a91))
* add CI workflow for quality checks including testing, linting, and formatting ([e0050e4](https://github.com/MatheusVieira97/reader-space-api/commit/e0050e45345214e3027b84f9e1f783cebac0318b))
* add CORS support with configurable origins and integrate middleware in the application ([dca6e05](https://github.com/MatheusVieira97/reader-space-api/commit/dca6e05ed0cbdb24ded4e37cf130310534c17e1a))
* add Docker support with Dockerfile and docker-compose for development and production environments ([af00758](https://github.com/MatheusVieira97/reader-space-api/commit/af007580b95ce409f4dbe986bf6537b27b025a64))
* add error handling to getArticleById method in ArticlesService ([642c976](https://github.com/MatheusVieira97/reader-space-api/commit/642c9766bba00cba9245c683152999e53bc96365))
* add PostsController to handle retrieval of posts ([1bd5b44](https://github.com/MatheusVieira97/reader-space-api/commit/1bd5b44f9afe643d42b3319c6c541b5ae99c05aa))
* add query functions for retrieving posts from the SQLite database ([18a268c](https://github.com/MatheusVieira97/reader-space-api/commit/18a268c929f31bf23c60f44f5ef161e22325985f))
* add route to retrieve a single article by ID ([3d6e987](https://github.com/MatheusVieira97/reader-space-api/commit/3d6e98760bf9088712a25b0272990249e5e874a7))
* add sample data and seeding functionality for posts in the SQLite database ([c1df554](https://github.com/MatheusVieira97/reader-space-api/commit/c1df554189da0aac82bc761ebe35dfc3610a5cab))
* add unit tests for ArticlesService ([b7ed804](https://github.com/MatheusVieira97/reader-space-api/commit/b7ed8049f1cceffafdde28b304bad8cbe04c6047))
* add Vitest for testing, update .gitignore, and configure ESLint for test files ([221737b](https://github.com/MatheusVieira97/reader-space-api/commit/221737b80805214ec4b5af7063908b7517df0c8f))
* create PostsRepository for database interactions to retrieve all posts ([b3cf1b4](https://github.com/MatheusVieira97/reader-space-api/commit/b3cf1b48fad4a0bd646f72906c4fc49561cdfa51))
* define Post interface and PostsResponse structure for post data handling ([b29c2e9](https://github.com/MatheusVieira97/reader-space-api/commit/b29c2e99235be6ecfe00950ba6b70748d9718644))
* enhance article retrieval by adding optional tag filtering in articles service and repository ([fe36430](https://github.com/MatheusVieira97/reader-space-api/commit/fe364306a6288a680a777c70e1f486762f4309af))
* extend IArticle interface to include optional fields for image_url, published_at, and tag ([8dbb9e7](https://github.com/MatheusVieira97/reader-space-api/commit/8dbb9e792bd2aa5f4482578a302bc62af39bca10))
* implement ArticlesService for article retrieval ([83399a9](https://github.com/MatheusVieira97/reader-space-api/commit/83399a924f28d0f24d5dd8318926f59ff94821c2))
* implement caching middleware and enhance article routes with caching capabilities for improved performance ([b150f41](https://github.com/MatheusVieira97/reader-space-api/commit/b150f413d1179a0600cad5b8ba780690064c7219))
* implement getArticleById method for article retrieval by ID ([d312ac8](https://github.com/MatheusVieira97/reader-space-api/commit/d312ac8c80127a45b5409053c2e7a08226d32c72))
* implement getArticleById method in ArticlesRepository for article retrieval by ID ([8ff09b3](https://github.com/MatheusVieira97/reader-space-api/commit/8ff09b348733d9a51e7b33d275d3a4bc855aee93))
* implement PostsService for managing post retrieval logic ([12f1a17](https://github.com/MatheusVieira97/reader-space-api/commit/12f1a1758c009fd1b69b5c76225b4155321b936c))
* implement SQLite database configuration and create posts table ([ee712b1](https://github.com/MatheusVieira97/reader-space-api/commit/ee712b1ffc5fdf4ef6bf262f801673b5ae12e728))
* initial project setup with TypeScript, ESLint, and Prettier configuration ([c1855a1](https://github.com/MatheusVieira97/reader-space-api/commit/c1855a14d61a6a81abc086cb0124427cd470a534))
* integrate database seeding and update middleware to retrieve posts ([d97c3b1](https://github.com/MatheusVieira97/reader-space-api/commit/d97c3b14b55341ccff42a4988577e40cc14450e4))
* introduce IArticle interface and related types for article management ([c5d1b2a](https://github.com/MatheusVieira97/reader-space-api/commit/c5d1b2ac5ea4953fd88455e60dda434b63cab34b))
* restructure API routes and integrate posts route handling ([94c6be1](https://github.com/MatheusVieira97/reader-space-api/commit/94c6be1794baacc8a66bc8e425d90a47b6232814))
* update sample articles with new content, authors, and metadata for enhanced article management ([555c17b](https://github.com/MatheusVieira97/reader-space-api/commit/555c17b7dddee54b0abb5e82528f089d61d812f9))
* update to return posts for test if production is working ([ce34850](https://github.com/MatheusVieira97/reader-space-api/commit/ce34850b660e704e2c24e501e0366a422715f72f))
* update tsconfig and enhance article model with additional fields for improved metadata ([8322b11](https://github.com/MatheusVieira97/reader-space-api/commit/8322b11b22d78de31a56f20be733a65429d40292))
