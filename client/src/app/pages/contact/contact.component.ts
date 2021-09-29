import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageData = {
    subject: "",
    content: ""
  }
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }
  addMessage(data: any) {
    this._userService.sendMessage(this.messageData).subscribe(
      data => {
        console.log(data)
        this.messageData = data
      },
      (e) => { console.log(e) },
      () => {
        this._router.navigateByUrl(``)
      }
    )
  }
}
