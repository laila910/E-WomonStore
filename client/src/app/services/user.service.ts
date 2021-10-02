import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public myRoutes = [
    { path: "user/register", key: "Register", isAuth: false },
    { path: "user/login", key: "Login", isAuth: false }
  ]
  public myLoggedRoutes = [
    { path: "", key: "Home", isAuth: true },
    { path: "product/allProduct", key: "products", isAuth: true },
    { path: "product/addedTocard", key: "cart", isAuth: true },
    { path: "user/profile", key: "account", isAuth: true },
    { path: "user/sendMessage", key: "contact us", isAuth: true },
    // { path: "user/allUsers", key: "Admin-dashboard", isAuth: true },
    // { path: "supplier", key: "supplier-dashboard", isAuth: true },
    { path: `user/logOut`, key: "Logout", isAuth: true }
  ]

  public isLoggedIn = localStorage.getItem("appToken") ? true : false


  public navMenu = localStorage.getItem("appToken") ? this.myLoggedRoutes : this.myRoutes
  public admin = localStorage.getItem('admin') ? true : false
  public supplier = localStorage.getItem('supplier') ? true : false
  public customer = localStorage.getItem('customer') ? true : false
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
  addProfileImage(file: any): Observable<any> {
    const formData = new FormData()
    formData.append('ImageProfile', file, file.name)
    return this._http.post(`${this.commonUrl}user/addImage`, formData)
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
  processOrder(id: any): Observable<any> {
    return this._http.post(`${this.commonUrl}user/processOrder`, null)
  }
  submitOrder(id: any): Observable<any> {
    return this._http.post(`${this.commonUrl}user/submitCustomerOrder/${id}`, null)
  }
}
