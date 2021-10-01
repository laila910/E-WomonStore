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
  // productData = {
  //   brandName: "",
  //   brandImage: ""
  // }
  file: any
  myData = {
    brandName: ""
  }
  onChangeFile(event: any) {
    this.file = event.target.files[0]
    console.log(event.target.value)
  }
  constructor(private _data: ProductService, private _router: Router, private _route: ActivatedRoute) { }
  id = this._route.snapshot.params.id;
  ngOnInit(): void {
  }
  addBrand(data: any) {
    this._data.addBrand(this.file, this.myData.brandName, this.id).subscribe(data => {
      console.log(data)
      // this.myData = data


    },
      (e) => { console.log(e) },
      () => {
        this._router.navigateByUrl('supplier')
      }
    )
  }
}
