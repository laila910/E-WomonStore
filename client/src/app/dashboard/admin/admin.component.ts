import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  myUsers: any[] = []

  constructor(private _data: UserService, private _router: Router) { }

  ngOnInit(): void {
    this._data.getAllUsers().subscribe(data => {
      console.log(data)
      this.myUsers = data.data
    })
  }
  deleteUser(id: any, i: any) {
    this._data.deleteUser(id).subscribe(data => {
      console.log(data)
    },
      (e) => { console.log(e) },
      () => {
        this.myUsers.splice(i, 1)
      })

  }
  activateStatus(id: any) {
    this._data.activateStatus(id).subscribe(data => {
      console.log(data)
    },
      (e) => { console.log(e) },
      () => { console.log(2) })


  }
  showUser(id: any) {
    this._router.navigateByUrl(`user/allUsers/${id}`)
  }
}
