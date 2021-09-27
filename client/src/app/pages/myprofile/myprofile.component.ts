import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getMe()
  }
  getMe() {
    this._userService.profile().subscribe(
      data => { console.log(data) },
      (e) => { console.log(e) },
      () => { console.log(2) })
  }
}
