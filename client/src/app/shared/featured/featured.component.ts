import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  myProducts: any[] = []
  Data: any[] = []
  constructor(private _data: ProductService, private _route: ActivatedRoute, private _router: Router) { }
  i: any
  ngOnInit(): void {
    this._data.getAllProduct().subscribe(data => {
      this.Data = data.data
      for (this.i = 0; this.i < this.Data.length; this.i++) {
        if (this.Data[this.i].isFeatured == true) {
          this.myProducts.push(this.Data[this.i])
        }
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
