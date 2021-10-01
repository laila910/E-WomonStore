import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  myProducts: any[] = []
  Data: any[] = []
  constructor(private _data: ProductService, private _route: ActivatedRoute, private _router: Router) { }
  // name = this._route.snapshot.params.cat;
  cat: string = ""

  //name 1 to 6 ["bag","watches", "eyewear", "clothing", "accessories","footwear"]
  ngOnInit(): void {

    this._route.queryParams
      .subscribe(params => {
        console.log(params); // { cat: name }
        this.cat = params.cat;
        console.log(this.cat); // name
      }
      );




    this._data.getAllProduct().subscribe(data => {

      if (this.cat) {
        this.myProducts = data.data

        this.Data = this.myProducts.filter(d => {

          return d.categories.catName == this.cat
        })
        this.myProducts = this.Data

      } else if (!this.cat) {
        this.myProducts = data.data
      }

    })
  }
  details(id: any) {
    this._router.navigateByUrl(`product/allProduct/${id}`)
  }
  addTocard(id: any) {
    this._router.navigateByUrl(`product/addedTocard/${id}`)
  }

}
