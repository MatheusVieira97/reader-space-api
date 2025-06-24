# Reader Space API

Uma API REST moderna e de alta performance construída com Node.js, TypeScript e Express para a aplicação Reader Space. Esta API fornece capacidades de gerenciamento de artigos com cache, paginação e tratamento abrangente de erros.

## 🚀 Funcionalidades

- **TypeScript**
- **Express.js**
- **SQLite**
- **Cache**
- **Paginação**
- **CORS**
- **Testes**
- **Docker**
- **Qualidade de Código**
- **Hot Reload**

## 📋 Pré-requisitos

- **Node.js**: 18.x ou superior
- **npm**: 8.x ou superior
- **Docker**: 20.x ou superior (opcional, para desenvolvimento containerizado)

## 🛠️ Instalação

1. **Clone o repositório**

   ```bash
   git clone git@github.com:MatheusVieira97/reader-space-api.git
   cd reader-space-api
   ```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

   ```bash
   # Crie o arquivo de ambiente .env.development

   # Edite com sua configuração:
   NODE_ENV="development"
   ```

## 🐳 Desenvolvimento com Docker

### Usando Docker Compose (Recomendado)

Execute o ambiente de desenvolvimento:

```bash
docker compose build api-dev
docker compose up api-dev -d
```

Pare todos os serviços:

```bash
docker-compose down
```

## Desenvolvimento Local Sem Docker
Inicie o servidor de desenvolvimento com hot reload:

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`

### Build de Produção

Compile e execute o servidor de produção:

```bash
npm run build
npm start
```

**URLs dos Serviços:**

- API de Desenvolvimento: `http://localhost:3000`

## 📚 Documentação da API

### URL Base

```
http://localhost:3000/api
```

### Endpoints

#### Obter Todos os Artigos

```http
GET /api/articles
```

**Cache:** 2 minutos
**Parâmetros de Query:**

- `limit` (number, opcional): Número de artigos por página (padrão: 10)
- `page` (number, opcional): Número da página (padrão: 1)
- `tag` (string, opcional): Filtrar artigos por tag

**Resposta:**

```json
{
  "data": [
    {
      "id": 1,
      "title": "Título do Artigo",
      "content": "Conteúdo do artigo...",
      "author": "Nome do Autor",
      "tag": "tecnologia",
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

#### Obter Artigo por ID

```http
GET /api/articles/:id
```

**Cache:** 5 minutos
**Resposta:**

```json
{
  "data": {
    "id": 1,
    "title": "Título do Artigo",
    "content": "Conteúdo do artigo...",
    "author": "Nome do Autor",
    "tag": "tecnologia",
    "image_url": "https://example.com/image.jpg",
    "created_at": "2024-01-01T00:00:00.000Z",
    "updated_at": "2024-01-01T00:00:00.000Z",
    "published_at": "2024-01-01T00:00:00.000Z"
  },
  "message": "Artigo recuperado com sucesso"
}
```

### Respostas de Erro

**400 Bad Request:**

```json
{
  "error": "Parâmetros de requisição inválidos",
  "message": "Mensagem detalhada do erro"
}
```

**404 Not Found:**

```json
{
  "error": "Artigo não encontrado",
  "message": "Artigo com ID 123 não existe"
}
```

**500 Internal Server Error:**

```json
{
  "error": "Erro interno do servidor",
  "message": "Ocorreu um erro inesperado"
}
```

## 🧪 Testes

### Executar Testes

```bash
# Executar testes em modo watch
npm test

# Executar testes uma vez
npm run test:run

# Executar testes com UI
npm run test:ui

# Gerar relatório de cobertura
npm run coverage
```

## 🔧 Scripts de Desenvolvimento

| Script                 | Descrição                                |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Iniciar servidor de desenvolvimento com hot reload |
| `npm run build`        | Compilar TypeScript para JavaScript      |
| `npm start`            | Iniciar servidor de produção             |
| `npm run type-check`   | Executar verificação de tipos TypeScript |
| `npm run lint`         | Executar ESLint                          |
| `npm run lint:fix`     | Corrigir problemas do ESLint automaticamente |
| `npm run format`       | Formatar código com Prettier             |
| `npm run format:check` | Verificar formatação do código           |
| `npm test`             | Executar testes com Vitest               |
| `npm run test:run`     | Executar testes uma vez                  |
| `npm run test:ui`      | Executar testes com UI                   |
| `npm run coverage`     | Gerar relatório de cobertura de testes   |

### Configuração do IDE

**Extensões do VS Code:**

- ESLint
- Prettier
- TypeScript Importer

### Convenção de Commits

Este projeto segue [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Novas funcionalidades
- `fix:` Correções de bugs
- `docs:` Mudanças na documentação
- `style:` Mudanças no estilo do código
- `refactor:` Refatoração de código
- `test:` Mudanças nos testes
- `chore:` Mudanças no processo de build ou ferramentas auxiliares

## 👨‍💻 Autor

**Matheus Vieira**

**Feliz Programação! 🚀**
