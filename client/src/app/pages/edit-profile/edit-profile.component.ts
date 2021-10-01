import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userData: any = {}
  constructor(public _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this._userService.profile().subscribe(
      all => {
        console.log(all)
        this.userData = all.data

      }

    )
  }
  editProfile(data: any) {
    this._userService.editProfile(this.userData).subscribe(
      data => {
        if (this._userService.supplier) {
          this.userData = {
            name: "",
            email: "",
            mobileNo: "",
            supplierCompanyName: "",
            supplierCompanyFax: "",
            supplierCompanyURL: "",
          }
        } else if (this._userService.customer) {
          this.userData = {
            name: "",
            email: "",
            mobileNo: "",
            customerCreditCard: "",
            customerExpMonth: "",
            customerExpYr: ""
          }
        } else {
          this.userData = {
            name: "",
            email: "",
            mobileNo: ""
          }
        }
        console.log(data)
        this.userData = data
      },
      (e) => { console.log(e) },
      () => {
        this._router.navigateByUrl(`user/profile`)
      }
    )
  }
}
