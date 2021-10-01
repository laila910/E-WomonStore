import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  // userData = {
  //   ImageProfile: ""
  // }
  file: any
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }
  onChangeFile(event: any) {
    this.file = event.target.files[0]
    console.log(event.target.files)
  }
  addProfileImage() {
    this._userService.addProfileImage(this.file).subscribe(
      data => {
        console.log(data)

      },
      (e) => { console.log(e) },
      () => {
        this._router.navigateByUrl(`user/profile`)
      }
    )
  }
}
