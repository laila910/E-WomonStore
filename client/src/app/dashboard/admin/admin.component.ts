import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  myUsers: any[] = []

  constructor(private _data: UserService) { }

  ngOnInit(): void {
    this._data.getAllUsers().subscribe(data => {
      console.log(data)
      this.myUsers = data
    })
  }
  deleteUser() {

  }
  activateStatus() {

  }
}
