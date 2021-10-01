import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  constructor(public _userService: UserService, private _route: ActivatedRoute) { }
  id = this._route.snapshot.params.id;
  userData: any = {}
  userType: any

  ngOnInit(): void {


    this._userService.getSingleUser(this.id).subscribe(
      data => {
        console.log(data)
        this.userType = data.data.userType
        if (this.userType == 2) {
          this.userData = {
            name: data.data.name,
            email: data.data.email,
            mobileNo: data.data.mobileNo,
            userType: data.data.userType,
            supplierCompanyName: data.data.supplierCompanyName,
            supplierCompanyFax: data.data.supplierCompanyFax,
            supplierCompanyURL: data.data.supplierCompanyURL,
            ImageProfile: data.data.ImageProfile,

          }
        } else if (this.userType == 3) {
          this.userData = {
            name: data.data.name,
            email: data.data.email,
            mobileNo: data.data.mobileNo,
            userType: data.data.userType,
            customerCreditCard: data.data.customerCreditCard,
            customerExpMonth: data.data.customerExpMonth,
            customerExpYr: data.data.customerExpYr,
            ImageProfile: data.data.ImageProfile,

            proccessedOrder: data.data.proccessedOrder

          }
        } else if (this.userType == 1) {
          this.userData = {
            name: data.data.name,
            email: data.data.email,
            mobileNo: data.data.mobileNo,
            userType: data.data.userType,
            ImageProfile: data.data.ImageProfile
          }
        }



      },
      (e) => { console.log(e) },
      () => {

        console.log(2)
      }
    )

  }



}



