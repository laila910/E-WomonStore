
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productData = {
    name: "",
    status: "",
    isFeatured: "",
    productPrice: "",
    productQuantity: "",
    productDescription: "",
    productSpecifications: "",
    unitsInStock: "",
    productDiscountAmount: "",
    productDiscountStatus: ""
  }
  constructor(public _data: ProductService, public _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }

  addProduct(data: any) {


    this._data.addProduct(this.productData).subscribe(
      data => {
        console.log(data)
        this.productData = data

      },
      (e) => { console.log(e) },
      () => {
        this._router.navigateByUrl('supplier')
      }
    )


  }
}
