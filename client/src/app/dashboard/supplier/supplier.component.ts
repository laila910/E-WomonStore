import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  myUsers: any[] = []
  myProducts: any[] = []
  constructor(private _data: UserService, private _product: ProductService) { }

  ngOnInit(): void {
    this._data.getAllUsers().subscribe(data => {
      console.log(data)
      this.myUsers = data.data
    })
    this._product.getAllProduct().subscribe(product => {
      console.log(product)
      this.myProducts = product.product
    })
  }

  submitOrder(id: any) {
    this._data.submitOrder(id).subscribe(data => {
      console.log(data)
    },
      (e) => { console.log(e) },
      () => { console.log(2) })
  }
  showUser(id: any) {
    this._data.getSingleUser(id).subscribe(data => {
      console.log(data)
    },
      (e) => { console.log(e) },
      () => { console.log(2) })//HENA I CAN REDIRECT data to show:)
  }

  addProduct() { }
  addSize(id: any) { }
  addCat(id: any) { }
  addBrand(id: any) { }
  addColors(id: any) {

  }

  addPImage(id: any) { }
  showProduct(id: any) { }
  editProduct(id: any) { }
  deleteProduct(id: any) { }

}
