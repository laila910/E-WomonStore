import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  myUsers: any[] = []
  constructor(private _data: UserService) { }

  ngOnInit(): void {
    this._data.getAllUsers().subscribe(data => {
      console.log(data)
      this.myUsers = data
    })
  }
  addProduct() { }
  submitOrder() { }
  showUser() { }
  addSize() { }
  addCat() { }
  addBrand() { }
  addColors() {

  }
  addPImage() { }
  showProduct() { }
  editProduct() { }
  deleteProduct() { }

}
