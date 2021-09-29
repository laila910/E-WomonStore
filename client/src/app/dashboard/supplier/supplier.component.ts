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
  showUser(id: any) { //hab3t el id lessa hana5odha
    this._router.navigateByUrl('user/allUsers')
    // this._data.getSingleUser(id).subscribe(data => {
    //   console.log(data)
    // },
    //   (e) => { console.log(e) },
    //   () => { console.log(2) })//HENA I CAN REDIRECT data to show:)
  }

  addProduct() {
    this._router.navigateByUrl('product/addProduct')
  }
  addSize(id: any) {
    this._router.navigateByUrl('product/addSizes')
  }
  addCat(id: any) { //hab3t el id lessa hana5odha
    this._router.navigateByUrl('product/addCat')
  }
  addBrand(id: any) { //lessa hab3t el id bardo
    this._router.navigateByUrl('product/addBrand')
  }
  addColors(id: any) {//lessa hab3t el id bardo
    this._router.navigateByUrl('product/addColors')
  }

  addPImage(id: any) { //lessa hab3t el id bardo
    this._router.navigateByUrl('product/addPImages')
  }
  showProduct(id: any) { //hab3t el id bardo lessa
    this._router.navigateByUrl('product/allProduct')
  }
  editProduct(id: any) { //hab3t el id bardo lessa
    this._router.navigateByUrl('product/addProduct')
  }
  deleteProduct(id: any) { //hab3t el id bardo lessa
    this._product.deleteProduct(id).subscribe(data => {
      console.log(data)
    },
      () => { },
      () => { })
  }

}
