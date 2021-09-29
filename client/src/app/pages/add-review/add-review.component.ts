import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  productData = {
    content: "",
    rating: ""
  }
  constructor(private _data: ProductService, private _route: ActivatedRoute, private _router: Router) { }
  id = this._route.snapshot.params.id;
  ngOnInit(): void {
  }
  addReview(data: any) {
    this._data.addReview(this.productData, this.id).subscribe(
      data => {
        console.log(data)
        this.productData = data
      },
      (e) => { console.log(e) },
      () => {
        this._router.navigateByUrl(`product/allProduct/:id`)
      }
    )
  }
}
