import { NextFunction, Request, Response } from 'express';

import { cacheService } from '../services/cache.service.js';

/**
 * Opções de configuração do middleware de cache
 */
interface CacheOptions {
  /** Chave personalizada para o cache (padrão: método + URL) */
  key?: string;
  /** Tempo de vida do cache em milissegundos (padrão: 5 minutos) */
  ttl?: number;
  /** Se deve adicionar headers de cache HTTP (padrão: true) */
  useHeaders?: boolean;
}

/**
 * Middleware de cache
 *
 * Funcionalidades:
 * - Cache em memória com TTL configurável
 * - Headers HTTP de cache (Cache-Control, X-Cache)
 * - Interceptação automática de respostas bem-sucedidas
 *
 * @param options - Configurações do cache
 * @returns
 */
export function cacheMiddleware(options: CacheOptions = {}) {
  // Opções de configuração do cache
  const { ttl = 5 * 60 * 1000, useHeaders = true } = options;

  return (req: Request, res: Response, next: NextFunction): void => {
    const cacheKey = options.key ?? generateCacheKey(req);
    const cachedData = cacheService.get(cacheKey);

    if (cachedData) {
      addCacheHeaders(res, ttl, 'HIT', useHeaders);
      res.json(cachedData);
      return;
    }

    interceptResponse(res, cacheKey, ttl, useHeaders);
    next();
  };
}

/**
 * Adiciona headers de cache HTTP à resposta
 * @param res - Objeto de resposta do Express
 * @param ttl - Tempo de vida em milissegundos
 * @param cacheStatus - Status do cache (HIT/MISS)
 * @param useHeaders - Se deve adicionar os headers
 */
function addCacheHeaders(
  res: Response,
  ttl: number,
  cacheStatus: 'HIT' | 'MISS',
  useHeaders: boolean
): void {
  if (!useHeaders) return;

  const maxAgeSeconds = Math.floor(ttl / 1000);

  res.set({
    'Cache-Control': `public, max-age=${maxAgeSeconds.toString()}`,
    'X-Cache': cacheStatus,
    'X-Cache-Timestamp': new Date().toISOString(),
  });
}

/**
 * Gera uma chave única para o cache baseada na requisição
 * @param req - Objeto de requisição do Express
 * @returns Chave única para o cache
 */
function generateCacheKey(req: Request): string {
  return `${req.method}:${req.originalUrl}`;
}

/**
 * Intercepta a resposta para salvar dados no cache
 * @param res - Objeto de resposta do Express
 * @param cacheKey - Chave do cache
 * @param ttl - Tempo de vida em milissegundos
 * @param useHeaders - Se deve adicionar headers
 */
function interceptResponse(
  res: Response,
  cacheKey: string,
  ttl: number,
  useHeaders: boolean
): void {
  const originalJson = res.json;

  res.json = function (data: unknown) {
    if (isSuccessfulResponse(res.statusCode)) {
      cacheService.set(cacheKey, data, ttl);
    }

    addCacheHeaders(res, ttl, 'MISS', useHeaders);

    return originalJson.call(this, data);
  };
}

/**
 * Verifica se o código de status indica uma resposta bem-sucedida
 * @param statusCode - Código de status HTTP
 * @returns true se for uma resposta bem-sucedida
 */
function isSuccessfulResponse(statusCode: number): boolean {
  return statusCode >= 200 && statusCode < 300;
}
