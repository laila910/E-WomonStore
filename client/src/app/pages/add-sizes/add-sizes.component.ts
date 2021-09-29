import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sizes',
  templateUrl: './add-sizes.component.html',
  styleUrls: ['./add-sizes.component.css']
})
export class AddSizesComponent implements OnInit {
  sizes = {
    size: "",
    number: ""
  }
  constructor(private _data: ProductService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  id = this._route.snapshot.params.id;
  addsize(data: any) {
    this._data.addSizes(this.sizes, this.id).subscribe(
      data => {
        console.log(data)
        this.sizes = data
      },
      (e) => { console.log(e) },
      () => {
        this._router.navigateByUrl('supplier')
      }
    )
  }
}
