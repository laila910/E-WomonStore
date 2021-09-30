import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productData: any = {}
  id = this._route.snapshot.params.id;
  constructor(private _data: ProductService, private _route: ActivatedRoute) { }
  // productReview = {
  //   review: "",
  //   rating: ""
  // }
  ngOnInit(): void {
    this._data.singleProduct(this.id).subscribe(data => {
      console.log(data)
      this.productData = data.data
    },
      (e) => { console.log(e) },
      () => {
        console.log(2)
      }
    )
  }
  // addR(data: any) {
  //   this._data.addReview(this.productReview, this.id).subscribe(
  //     data => {
  //       console.log(data)
  //       this.productReview = data
  //     },
  //     (e) => { console.log(e) },
  //     () => {
  //       console.log(2)
  //     }
  //   )
  // }
}


