import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    // this._userService.logoutUser(this.userData).subscribe(data => {
    //   console.log(data)
    // })
  }

}
