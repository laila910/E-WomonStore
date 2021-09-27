import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  myProducts: any[] = []
  constructor(private _data: ProductService) { }

  ngOnInit(): void {
    this._data.getAllProduct().subscribe(data => {
      console.log(data.data)
      this.myProducts = data.data
    })
  }

}
