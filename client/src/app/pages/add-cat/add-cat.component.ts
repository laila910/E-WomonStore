import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {
  category = {
    catName: ""
  }

  constructor(private _data: ProductService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }
  id = this._route.snapshot.params.id;
  addCat(data: any) {
    this._data.addCategory(this.category, this.id).subscribe(data => {
      console.log(data)
      this.category = data
    },
      (e) => { console.log(e) },
      () => {
        this._router.navigateByUrl('supplier')
      }
    )

  }
}
