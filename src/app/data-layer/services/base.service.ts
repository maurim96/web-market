import { tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Utils } from '../core';
import { HttpService } from './http.service';

interface DataCache {
  timestamp: number;
  response: any;
}

export abstract class BaseService {
  http: HttpService;

  cacheTimeout = 120;

  protected clearCacheTimeout = 300;

  protected clearCacheTimer: number;

  private cache: { [key: string]: DataCache };

  constructor(public baseServiceDeps: BaseServiceDeps) {
    this.http = this.baseServiceDeps.http;
    this.cache = {};

    this.clearCacheTimer = window.setInterval(() => this.clearCache(false), this.clearCacheTimeout * 1000);
  }

  protected clearCache(clearAll = true): void {
    if (clearAll) {
      this.cache = {};
    } else {
      Object.keys(this.cache)
        .filter((key) => this.isExpiredCache(this.cache[key]))
        .forEach((key) => delete this.cache[key]);
    }
  }

  protected getCacheKey(url, params): string {
    const queryParams = Utils.flattenQueryParams(params);
    return queryParams ? `${url}?${queryParams}` : url;
  }

  protected getCache(url): any {
    const cache = this.cache[url];

    if (cache && !this.isExpiredCache(cache)) {
      return cache.response;
    }
  }

  protected setCache(url: string, params: object, response: any): any {
    const cacheKey = this.getCacheKey(url, params);

    if (this.cacheTimeout > 0) {
      this.cache[cacheKey] = { timestamp: Date.now(), response };
    }
    return this.getCache(cacheKey);
  }

  protected checkCacheAndGet(url: string, params?: any, options?, skipCache?: boolean): Observable<any> {
    const cacheKey = this.getCacheKey(url, params);
    return (!skipCache && this.getCache(cacheKey)) ? of(this.getCache(cacheKey)) : this.http.get(url, params, options)
      .pipe(
        tap((res) => this.setCache(url, params, res))
      );
  }

  private isExpiredCache(cache: DataCache): boolean {
    return (Date.now() - cache.timestamp - (this.cacheTimeout * 1000)) > 0;
  }
}

@Injectable()
export class BaseServiceDeps {
  constructor(public http: HttpService) { }
}
