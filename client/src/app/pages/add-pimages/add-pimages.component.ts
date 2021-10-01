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
  // productData = {
  //   productImage: ""
  // }
  file: any
  constructor(private _data: ProductService, private _router: Router, private _route: ActivatedRoute) { }
  id = this._route.snapshot.params.id;
  ngOnInit(): void {
  }
  onChangeFile(event: any) {
    this.file = event.target.files[0]
    console.log(event.target.files)

  }
  addPImages() {
    this._data.addPImages(this.file, this.id).subscribe(
      data => {
        console.log(data)

      },
      (e) => { console.log(e) },
      () => {
        this._router.navigateByUrl(`supplier`)
      }
    )
  }

}
