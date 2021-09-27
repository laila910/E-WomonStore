import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this._http.post('http://localhost:3000/user/register', userData)
  }
  getAllUsers(): Observable<any> {
    return this._http.get('http://localhost:3000/user/allUsers')
  }
  loginUser(userData: any): Observable<any> {
    return this._http.post('http://localhost:3000/user/login', userData)
  }
  // logoutUser(): Observable<any> {
  //   return this._http.post('http://localhost:3000/user/logOut')
  // }
}
