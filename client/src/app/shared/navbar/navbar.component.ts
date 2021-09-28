import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }
  logOut() {
    this._userService.logout().subscribe(
      data => { console.log(data) },
      (e) => { console.log(e) },
      () => { console.log(2) })

  }
}
