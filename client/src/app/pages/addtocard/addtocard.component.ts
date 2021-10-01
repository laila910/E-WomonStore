import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocard',
  templateUrl: './addtocard.component.html',
  styleUrls: ['./addtocard.component.css']
})
export class AddtocardComponent implements OnInit {
  qty: any
  Myproduct = {
    _id: "",
    name: "",
    productPrice: "",
    productQuantity: "",
    productImage: ""
  }


  constructor(private _data: ProductService, private _route: ActivatedRoute, private _user: UserService) { }
  id = this._route.snapshot.params.id;
  countVal: any = 1

  ngOnInit(): void {
    this._data.singleProduct(this.id).subscribe(
      data => {
        console.log(data.data)
        this.Myproduct = data.data
      },
      () => { },
      () => {
        parseInt(this.Myproduct.productQuantity)
        this.Myproduct.productQuantity = this.countVal
      }
    )
    this._data.addToCard(this.Myproduct, this.id).subscribe(
      data => {


      },
      (e) => { console.log(e) },
      () => {
        console.log(2)
      }
    )

  }


  updateCard() {
    this.Myproduct = {
      _id: "",
      name: "",
      productPrice: "",
      productQuantity: "",
      productImage: ""
    }
  }
  processOrder(id: any) {
    this._user.processOrder(this.id).subscribe(
      data => { console.log(data) },
      (e) => { console.log(e) },
      () => { console.log(2) }
    )
  }


}
