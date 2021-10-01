import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userType: any

  userData: any = {}
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }
  onRegister(data: any) {
    if (this.userType == 2) {
      this.userData = {
        name: "",
        email: "",
        password: "",
        mobileNo: "",
        userType: this.userType,
        accountStatus: false,
        supplierCompanyName: "",
        supplierCompanyFax: "",
        supplierCompanyURL: ""
      }
    } else if (this.userType == 3) {
      this.userData = {
        name: "",
        email: "",
        password: "",
        mobileNo: "",
        userType: this.userType,
        accountStatus: false,
        customerCreditCard: "",

        customerExpMonth: "",
        customerExpYr: ""
      }
    } else if (this.userType == 1) {
      this.userData = {
        name: "",
        email: "",
        password: "",
        mobileNo: "",
        userType: this.userType,
        accountStatus: false
      }
    }
    console.log(data.value)
    if (data.valid) {
      console.log(this.userData)
      this._userService.registerUser(this.userData).subscribe(
        data => {
          console.log(data)



        },
        (e) => { console.log(e) },
        () => {
          this._router.navigateByUrl('user/login')
        }
      )

    }
  }

}
