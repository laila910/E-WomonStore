import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any = {
    email: "",
    password: ""
  }
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }
  onLogin(data: any) {
    // if (data.valid) {
    console.log(this.userData)
    this._userService.loginUser(this.userData).subscribe(data => {
      console.log(data.data.token)
      localStorage.setItem('appToken', `bearer ${data.data.token}`)
    },
      () => { },
      () => { }
    )

    // }
  }
}
