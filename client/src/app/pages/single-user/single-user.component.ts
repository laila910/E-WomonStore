import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  constructor(private _userService: UserService, private _route: ActivatedRoute) { }
  id = this._route.snapshot.params.id;
  userType: any
  userData: any = {}


  ngOnInit(): void {

    this._userService.getSingleUser(this.id).subscribe(
      data => {
        console.log(data)
        this.userData = data

      },
      (e) => { console.log(e) },
      () => {

        console.log(2)
      }
    )

  }



}



