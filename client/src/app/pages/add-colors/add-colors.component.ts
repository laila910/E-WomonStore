import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-colors',
  templateUrl: './add-colors.component.html',
  styleUrls: ['./add-colors.component.css']
})
export class AddColorsComponent implements OnInit {
  productData = {
    firstColor: "",
    secondColor: "",
    thirdColor: ""
  }
  constructor(private _data: ProductService, private _router: Router, private _route: ActivatedRoute) { }
  id = this._route.snapshot.params.id;
  ngOnInit(): void {
  }
  addcolors(data: any) {
    this._data.addColors(this.productData, this.id).subscribe(
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
