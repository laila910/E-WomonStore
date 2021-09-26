import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData = {
    name: "",
    email: "",
    password: "",
    mobileNo: "",
    userType: "",
    accountStatus: false
  }
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }
  onRegister(data: any) {
    // console.log(data.value)
    console.log(this.userData)
    this._userService.registerUser(this.userData).subscribe(data => {
      console.log(data)
    })

  }

}
