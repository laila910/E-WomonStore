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
  productData: any = {
    name: "",
    status: "",
    isFeatured: "",
    productPrice: "",
    productQuantity: "",
    productSpecifications: "",
    productDescription: "",
    unitsInStock: "",
    productDiscountAmount: "",
    productDiscountStatus: ""
  }

  constructor(private _data: ProductService, private _router: Router, private _route: ActivatedRoute) { }
  id = this._route.snapshot.params.id;
  ngOnInit(): void {
    this._data.singleProduct(this.id).subscribe(
      all => {
        console.log(all)
        this.productData = all.data
      }
    )
  }

  editProduct(data: any) {
    this._data.editProduct(this.productData, this.id).subscribe(
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
