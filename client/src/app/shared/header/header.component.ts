import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }

  findCat(name: any) {
    if (name == 1) { name = "bag" }
    else if (name == 2) { name = "watches" }
    else if (name == 3) { name = "eyewear" }
    else if (name == 4) { name = "clothing" }
    else if (name == 5) { name = "accessories" }
    else if (name == 6) { name = "footwear" }

    this._router.navigate([`product/allProduct`], { queryParams: { cat: name } })
  }
}
