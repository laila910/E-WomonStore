import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocard',
  templateUrl: './addtocard.component.html',
  styleUrls: ['./addtocard.component.css']
})
export class AddtocardComponent implements OnInit {
  qty: number = 1
  constructor() { }

  ngOnInit(): void {
  }
  minusqty(qty: any) {
    this.qty++
  }
  plusqty(qty: any) {
    this.qty--
  }
  deleteProduct() { }
  updateCard() { }
  submitOrder() { }
}
