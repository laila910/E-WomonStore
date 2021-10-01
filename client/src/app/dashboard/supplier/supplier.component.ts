import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _data: UserService, private _product: ProductService, private _router: Router) { }

  ngOnInit(): void {
    this._product.getAllProduct().subscribe(product => {
      console.log(product)
      this.myProducts = product.data
    })
    this._data.getAllUsers().subscribe(data => {
      console.log(data)
      this.myUsers = data.data
    })

  }

  submitOrder(id: any) {

    this._data.submitOrder(id).subscribe(data => {
      console.log(data)
    },
      (e) => { console.log(e) },
      () => { console.log(2) })
  }
  showUser(id: any, userType: any) {
    localStorage.setItem(`userType`, userType)
    this._router.navigateByUrl(`user/allUsers/${id}`)
  }

  addProduct() {
    this._router.navigateByUrl('product/addProduct')
  }
  addSize(id: any) {
    this._router.navigateByUrl(`product/addSizes/${id}`)
  }
  addCat(id: any) {
    this._router.navigateByUrl(`product/addCat/${id}`)
  }
  addBrand(id: any) {
    this._router.navigateByUrl(`product/addBrand/${id}`)
  }
  addColors(id: any) {
    this._router.navigateByUrl(`product/addColors/${id}`)
  }

  addPImage(id: any) {
    this._router.navigateByUrl(`product/addPImages/${id}`)
  }
  showProduct(id: any) {
    this._router.navigateByUrl(`product/allProduct/${id}`)
  }
  editProduct(id: any) {
    this._router.navigateByUrl(`product/editProduct/${id}`)
  }
  deleteProduct(id: any, i: any) {
    this._product.deleteProduct(id).subscribe(data => {
      console.log(data)
    },
      (e) => { console.log(e) },
      () => {

        this.myProducts.splice(i, 1)
      })
  }

}
