import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  userData = {
    ImageProfile: ""
  }
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }
  addProfileImage(data: any) {
    this._userService.addProfileImage(this.userData).subscribe(
      data => {
        console.log(data)
        this.userData = data
      },
      (e) => { console.log(e) },
      () => {
        this._router.navigateByUrl(`profile`)
      }
    )
  }
}
