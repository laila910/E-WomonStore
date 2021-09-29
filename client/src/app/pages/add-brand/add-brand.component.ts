import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  productData = {
    brandName: "",
    brandImage: ""
  }
  constructor(private _data: ProductService, private _router: Router, private _route: ActivatedRoute) { }
  id = this._route.snapshot.params.id;
  ngOnInit(): void {
  }
  addBrand(data: any) {
    this._data.addBrand(this.productData, this.id).subscribe(data => {
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
