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
    _id: "",
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
        localStorage.setItem(`userId`, data.data._id)
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

  admin() {
    this._router.navigateByUrl(`user/allUsers`)
  }
  supplier() {
    this._router.navigateByUrl(`supplier`)
  }
  deactivate() {
    this._userService.deactivate().subscribe(
      data => { },
      (e) => { console.log(e) },
      () => {

        this._router.navigateByUrl(`user/register`)
      }
    )
  }
  showcard(id: any) {
    this._router.navigate([`showcard`], { queryParams: { userId: id } })
  }
}
