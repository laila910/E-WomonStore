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
      this.myUsers = data.data
    })
  }
  deleteUser(id: any) {
    this._data.deleteUser(id).subscribe(data => {
      console.log(data)
    },
      (e) => { console.log(e) },
      () => { console.log(2) })

  }
  activateStatus(id: any) {
    this._data.activateStatus(id).subscribe(data => {
      console.log(data)
    },
      (e) => { console.log(e) },
      () => { console.log(2) })


  }
}
