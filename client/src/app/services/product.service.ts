import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  commonUrl = "http://localhost:3000/"
  constructor(private _http: HttpClient) { }

  addProduct(userData: any): Observable<any> {
    return this._http.post(`${this.commonUrl}product/addProduct`, userData)
  }
  addCategory(userData: any, id: any): Observable<any> {
    return this._http.post(`${this.commonUrl}product/addCat/${id}`, userData)
  }
  addBrand(userData: any, id: any): Observable<any> {
    return this._http.post(`${this.commonUrl}product/addBrand/${id}`, userData)
  }
  getAllProduct(): Observable<any> {
    return this._http.get(`${this.commonUrl}product/allProduct`)
  }
  singleProduct(id: any): Observable<any> {
    return this._http.get(`${this.commonUrl}product/allProduct/${id}`)
  }
  addSizes(userData: any, id: any): Observable<any> {
    return this._http.post(`${this.commonUrl}product/addSizes/${id}`, userData)
  }
  editProduct(userData: any, id: any): Observable<any> {

    return this._http.patch(`${this.commonUrl}product/editProduct/${id}`, userData)
  }
  addColors(userData: any, id: any): Observable<any> {
    return this._http.post(`${this.commonUrl}product/addColors/${id}`, userData)
  }
  addPImages(userData: any, id: any): Observable<any> {
    return this._http.post(`${this.commonUrl}product/addPImages/${id}`, userData)
  }
  addReview(userData: any, id: any): Observable<any> {
    return this._http.post(`${this.commonUrl}product/addReview/${id}`, userData)
  }
  addToCard(userData: any, id: any): Observable<any> {
    return this._http.post(`${this.commonUrl}product/addedTocard/$id`, userData)
  }
  deleteProduct(id: any): Observable<any> {
    return this._http.delete(`${this.commonUrl}product/allProduct/${id}`)
  }
}
