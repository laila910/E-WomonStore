import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }
  getAllProduct(): Observable<any> {
    return this._http.get('http://localhost:3000/product/allProduct')
  }
}
