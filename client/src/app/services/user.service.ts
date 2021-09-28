import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  commonUrl = "http://localhost:3000/"
  constructor(private _http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this._http.post(`${this.commonUrl}user/register`, userData)
  }
  loginUser(userData: any): Observable<any> {
    return this._http.post(`${this.commonUrl}user/login`, userData)
  }
  addAddress(userData: any): Observable<any> {
    return this._http.post(`${this.commonUrl}user/addAddress`, userData)
  }
  addProfileImage(userData: any): Observable<any> {
    return this._http.post(`${this.commonUrl}user/addImage`, userData)
  }
  logout(): Observable<any> {
    return this._http.post(`${this.commonUrl}user/logOut`, null)
  }
  logoutAll(): Observable<any> {
    return this._http.post(`${this.commonUrl}user/logOutAll`, null)
  }
  profile(): Observable<any> {
    return this._http.post(`${this.commonUrl}user/profile`, null)
  }
  editProfile(userData: any): Observable<any> {
    return this._http.patch(`${this.commonUrl}user/editProfile`, userData)
  }
  sendMessage(userData: any): Observable<any> {
    return this._http.post(`${this.commonUrl}user/sendMessage`, userData)
  }
  getAllUsers(): Observable<any> {
    return this._http.get(`${this.commonUrl}user/allUsers`)
  }
  getSingleUser(id: any): Observable<any> {
    return this._http.get(`${this.commonUrl}user/allUsers/${id}`)
  }
  deleteUser(id: any): Observable<any> {
    return this._http.delete(`${this.commonUrl}user/allUsers/${id}`)

  }
  activateStatus(id: any): Observable<any> {
    return this._http.post(`${this.commonUrl}user/activateStatus/${id}`, null)
  }
  deactivate(): Observable<any> {
    return this._http.post(`${this.commonUrl}user/deactivate`, null)
  }
  processOrder(): Observable<any> {
    return this._http.post(`${this.commonUrl}user/processOrder`, null)
  }
  submitOrder(id: any): Observable<any> {
    return this._http.post(`${this.commonUrl}user/submitCustomerOrder/${id}`, null)
  }
}
