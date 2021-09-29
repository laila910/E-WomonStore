import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  // productData = {
  //   name: "",
  //   status: "",
  //   isFeatured: "",
  //   productPrice: "",
  //   productQuantity: "",
  //   productSpecifications: "",
  //   productDescription: "",
  //   unitsInStock: "",
  //   productDiscountAmount: "",
  //   productDiscountStatus: ""
  // }
  productData: any = {}
  constructor(private _data: ProductService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._data.singleProduct(this.id).subscribe(
      all => {
        console.log(all)
        this.productData = all.data
      }
    )
  }
  id = this._route.snapshot.params.id;
  editProduct(data: any) {
    this._data.editProduct(this.id, this.productData).subscribe(
      data => {
        console.log(data)
        this.productData = data
      },
      (e) => { console.log(e) },
      () => {
        this._router.navigateByUrl(`supplier`)
      }
    )
  }
}
