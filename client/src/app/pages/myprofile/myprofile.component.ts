import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  myData = {
    name: "",
    email: "",
    mobileNo: "",
    userType: "",
    supplierCompanyName: "",
    supplierCompanyFax: "",
    supplierCompanyURL: "",
    customerCreditCard: "",
    customerExpMonth: "",
    customerExpYr: "",
    ImageProfile: "",
    Addresses: [{ addrType: "", addrDetails: "" }],
    contactMessages: [{ subject: "", Message: "" }]
  }

  constructor(public _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.getMe()
  }
  getMe() {
    this._userService.profile().subscribe(
      data => {
        console.log(data.data)
        this.myData = data.data
        if (data.data.userType == 1) {
          localStorage.removeItem(`supplier`)
          localStorage.removeItem(`customer`)
          localStorage.setItem(`admin`, data.data.userType)
        } else if (data.data.userType == 2) {
          localStorage.removeItem(`admin`)
          localStorage.removeItem(`customer`)
          localStorage.setItem(`supplier`, data.data.userType)
        } else if (data.data.userType == 3) {
          localStorage.removeItem(`admin`)
          localStorage.removeItem(`supplier`)
          localStorage.setItem(`customer`, data.data.userType)
        }

        console.log(data.data.userType)


      },
      (e) => { this._router.navigate(['user/login']) },
      () => { console.log(2) })
  }
  edit() {
    this._router.navigateByUrl(`user/editProfile`)
  }
  addAddress() {
    this._router.navigateByUrl(`user/addAddress`)
  }
  addImage() {
    this._router.navigateByUrl(`user/addImage`)
  }
  logOut() {
    this._userService.logout().subscribe(
      data => {
        console.log(data)

        localStorage.clear
      },
      (e) => { console.log(e) },
      () => {
        this._userService.navMenu = this._userService.myRoutes
        localStorage.clear
        this._router.navigateByUrl('user/login')
      })

  }
}
