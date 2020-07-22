import { Observable, forkJoin, of } from 'rxjs';

export abstract class BaseModelInterface {
  constructor(data?: object) {
    if (data) {
      Object.keys(data).forEach(key => this[key] = data[key]);
    }
  }

  abstract getCopy(): this;
}

export class Utils {

  static flattenQueryParams(queryParams: object): string {
    return Object.keys(queryParams || {})
      .sort()
      .map((k) => `${Utils.encodeURIComponent(k)}=${Utils.encodeURIComponent(queryParams[k])}`)
      .join('&');
  }

  static encodeURIComponent(str: string): string {
    return encodeURIComponent(str);
  }

  static getModelInstance<T>(model: T | (new() => T)): T {
    const clsModel = model as (new() => T);
    return clsModel.prototype ? new clsModel() : model as T;
  }

  static getModelClass<T>(model: T | (new() => T)): any {
    const clsModel = model as (new() => T);
    return clsModel.prototype ? clsModel : model.constructor;
  }

  static noop(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  /**
   * Rxjs forkJoin does not emit any events if observable array is empty.
   * Use this operator to avoid checking empty array before using forkJoin
   */
  static forkJoin(observables: Observable<any>[]): Observable<any> {
    if (observables.length) {
      return forkJoin(observables);
    }
    return of(null);
  }
}
