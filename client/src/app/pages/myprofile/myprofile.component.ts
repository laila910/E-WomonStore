import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  myData: [] = []
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.getMe()
  }
  getMe() {
    this._userService.profile().subscribe(
      data => {
        console.log(data)
        this.myData = data
      },
      (e) => { this._router.navigate(['user/login']) },
      () => { console.log(2) })
  }
  logOut() {
    this._userService.logout().subscribe(
      data => { console.log(data) },
      (e) => { console.log(e) },
      () => { console.log(2) })

  }
}
