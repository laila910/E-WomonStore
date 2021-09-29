import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pimages',
  templateUrl: './add-pimages.component.html',
  styleUrls: ['./add-pimages.component.css']
})
export class AddPImagesComponent implements OnInit {
  productData = {
    productImage: ""
  }
  constructor(private _data: ProductService, private _router: Router, private _route: ActivatedRoute) { }
  id = this._route.snapshot.params.id;
  ngOnInit(): void {
  }
  addPImages(data: any) {
    this._data.addPImages(this.productData, this.id).subscribe(
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
