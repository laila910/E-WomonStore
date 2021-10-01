import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _userService: UserService, private _router: Router) { }

  myRoutes = [



    { path: "user/register", key: "Register", isAuth: false },
    { path: "user/login", key: "Login", isAuth: false }

  ]
  myLoggedRoutes = [
    { path: "", key: "Home", isAuth: true },
    { path: "product/allProduct", key: "products", isAuth: true },
    { path: "product/addedTocard", key: "cart", isAuth: true },
    { path: "user/profile", key: "account", isAuth: true },
    { path: "user/sendMessage", key: "contact us", isAuth: true },
    { path: "user/allUsers", key: "Admin-dashboard", isAuth: true },
    { path: "supplier", key: "supplier-dashboard", isAuth: true }
  ]
  ngOnInit(): void {
  }
  logOut() {
    this._userService.logout().subscribe(
      data => {
        console.log(data)
        localStorage.clear
      },
      (e) => { console.log(e) },
      () => {

        // this._userService.isLoggedIn = false
        this._userService.navMenu = this._userService.myRoutes
        this._router.navigateByUrl('user/login')
      })

  }
}
