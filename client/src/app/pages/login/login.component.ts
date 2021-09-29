import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  // userData: any = {
  //   email: "",
  //   password: ""
  // }
  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }
  constructor(public _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }
  onLogin(data: any) {
    // if (data.valid) {
    console.log(this.loginForm.value)
    this._userService.loginUser(this.loginForm.value).subscribe(
      data => {
        console.log(data.data.token)
        localStorage.setItem(`appToken`, `Bearer ${data.data.token}`)
      },
      () => { },
      () => {
        this._userService.navMenu = this._userService.myLoggedRoutes
        this._router.navigateByUrl('user/profile')
      }
    )

    // }
  }
}
