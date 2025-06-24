/**
 * Interface que representa um item armazenado no cache
 */
interface CacheItem<T> {
  /** Dados armazenados */
  data: T;
  /** Timestamp de quando o item foi criado (em milissegundos) */
  timestamp: number;
  /** Tempo de vida do item em milissegundos */
  ttl: number;
}

/**
 * Serviço de cache em memória com TTL (Time To Live)
 * Permite armazenar dados temporariamente com expiração automática
 */
export class CacheService {
  private cache = new Map<string, CacheItem<unknown>>();

  /** TTL padrão: 5 minutos em milissegundos */
  private readonly defaultTTL = 5 * 60 * 1000;

  /**
   * Remove itens expirados do cache
   * Útil para limpeza periódica e liberação de memória
   */
  cleanup(): void {
    const now = Date.now();

    for (const [key, item] of this.cache.entries()) {
      if (this.isItemExpired(item, now)) {
        this.cache.delete(key);
      }
    }
  }

  /**
   * Remove todos os itens do cache
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Remove um item específico do cache
   * @param key - Chave do item a ser removido
   */
  delete(key: string): void {
    this.cache.delete(key);
  }

  /**
   * Obtém um item do cache
   * @param key - Chave do item
   * @returns
   */
  get(key: string): unknown {
    const item = this.cache.get(key);

    if (!item) {
      return null;
    }

    const isExpired = this.isItemExpired(item);
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  /**
   * Obtém estatísticas do cache
   * @returns Objeto com informações sobre o cache
   */
  getStats() {
    return {
      defaultTTL: this.defaultTTL,
      size: this.cache.size,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Armazena um item no cache
   * @param key - Chave do item
   * @param data - Dados a serem armazenados
   * @param ttl - Tempo de vida em milissegundos
   */
  set(key: string, data: unknown, ttl: number = this.defaultTTL): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  /**
   * Verifica se um item está expirado
   * @param item - Item do cache
   * @param currentTime - Tempo atual
   * @returns true se o item estiver expirado
   */
  private isItemExpired(item: CacheItem<unknown>, currentTime: number = Date.now()): boolean {
    return currentTime - item.timestamp > item.ttl;
  }
}

export const cacheService = new CacheService();
