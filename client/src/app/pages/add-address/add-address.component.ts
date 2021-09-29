import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  userData = {
    addrType: "",
    addrDetails: ""
  }
  constructor(private _userService: UserService, private _route: Router) { }

  ngOnInit(): void {
  }
  addAddress(data: any) {
    this._userService.addAddress(this.userData).subscribe(
      data => {
        console.log(data)
        this.userData = data
      },
      (e) => { console.log(e) },
      () => {
        this._route.navigateByUrl(`profile`)
      }
    )
  }
}
