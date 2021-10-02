import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public _userService: UserService, private _router: Router) { }

  ngOnInit(): void {



    this._userService.logout().subscribe(
      data => {
        console.log(data)

        localStorage.clear()
      },
      (e) => { console.log(e) },
      () => {
        this._userService.navMenu = this._userService.myRoutes
        localStorage.clear()
        this._router.navigateByUrl('user/login')
      })

  }

}



