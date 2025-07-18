import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  httpPOST<T>(url: string, payload: any, headers?: HttpHeaders): Observable<T> {
    let options = {
      headers: headers || new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this._http.post<T>(url, payload, options);
  }

  httpGET<T>(url: string): Observable<T> {
    return this._http.get<T>(url);
  }
}
