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

  ngOnInit(): void {
    this._data.singleProduct(this.id).subscribe(data => {
      console.log(data)
      this.productData = data
    },
      (e) => { console.log(e) },
      () => {

      }
    )
  }
}


