import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  getHttpHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getHttpOptions(): { headers: HttpHeaders } {
    return {
      headers: this.getHttpHeaders()
    };
  }

  get(url: string, params?: any, options?): Observable<any> {
    options = options || this.getHttpOptions();
    options.params = new HttpParams({ fromObject: params || {} });
    return this.http.get(url, options);
  }

  put(url: string, item: any | null, options?): Observable<any> {
    return this.http.put(url, item, options || this.getHttpOptions());
  }

  patch(url: string, item: any | null, options?): Observable<any> {
    return this.http.patch(url, item, options || this.getHttpOptions());
  }

  post(url: string, item: any | null, options?): Observable<any> {
    return this.http.post(url, item, options || this.getHttpOptions());
  }

  delete(url: string, options?): Observable<any> {
    return this.http.delete(url, options || this.getHttpOptions());
  }
}
