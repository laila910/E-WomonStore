import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcard',
  templateUrl: './showcard.component.html',
  styleUrls: ['./showcard.component.css']
})
export class ShowcardComponent implements OnInit {
  Data: any
  totalCard: any[] = []
  Card: any[] = []
  ownCard: any = {}
  countVal: number = 0
  Product: any[] = []
  container: any
  constructor(private _userService: UserService, private _data: ProductService, private _route: ActivatedRoute, private _router: Router) { }
  userId: any = ""
  array: any[] = []
  i: any
  _id: any
  // y: any
  r: any

  ngOnInit(): void {
    this._route.queryParams
      .subscribe(params => {
        console.log(params); // { userId: id }
        this.userId = params.userId;//uid = userId
        console.log(this.userId); // id
      }
      );
    this.card()

  }
  card() {

    this._data.getAllProduct().subscribe(
      data => {
        if (this.userId) {
          this.Data = data.data
          for (const key in this.Data) {
            if (this.Data.hasOwnProperty(key)) {
              const element = this.Data[key].addTocard;
              console.log(key + ": ", element);
              this.totalCard.push(element)

            }
          }
          console.log(this.totalCard)
          this.Card = [].concat.apply([], this.totalCard);

          console.log(this.Card);
          // this.ownCard = Card.find(d => {
          //   return d.Card.userId === this.userId.value()
          // })
          function search(nameKey: any, myArray: any, Totalarray: any) {
            for (var i = 0; i < myArray.length; i++) {
              if (myArray[i].userId === nameKey) {

                Totalarray.push(myArray[i])
              }
            }
            return Totalarray
          }

          this.ownCard = search(this.userId, this.Card, [])
          console.log(this.ownCard)
          // this.totalCard = data.data.addTocard
          // console.log(data.data)
        } else {
          // console.log(data.data)
          this.userId = localStorage.getItem(`userId`)
          this.Data = data.data
          for (const key in this.Data) {
            if (this.Data.hasOwnProperty(key)) {
              const element = this.Data[key].addTocard;
              console.log(key + ": ", element);
              this.totalCard.push(element)

            }
          }
          console.log(this.totalCard)
          this.Card = [].concat.apply([], this.totalCard);

          console.log(this.Card);
          // this.ownCard = Card.find(d => {
          //   return d.Card.userId === this.userId.value()
          // })
          function search(nameKey: any, myArray: any, Totalarray: any) {
            for (var i = 0; i < myArray.length; i++) {
              if (myArray[i].userId === nameKey) {

                Totalarray.push(myArray[i])
              }
            }
            return Totalarray
          }

          this.ownCard = search(this.userId, this.Card, [])
          console.log(this.ownCard)
        }

        // this._data.getAllProduct().subscribe(
        //   data => {
        //     this.r = data.data
        //     function search(nameKey: any, myArray: any, contanier: any, array: any) {
        //       for (var y = 0; y < array.length; y++) {
        //         for (var i = 0; i < myArray.length; i++) {
        //           if (array[y].productId === nameKey.myArray[i]) {
        //             contanier.push(myArray[i])
        //           }
        //         }
        //       }
        //       return contanier
        //     }
        //     this.Product = search(this._id, this.r, [], this.ownCard)
        //     console.log(this.Product)
        //   }
        // )
      }

      ,
      (e) => { console.log(e) },
      () => {
        console.log(2)
      }
    )


  }
  processOrder() {
    this._userService.processOrder().subscribe(data => {
      console.log(data)
    },
      (e) => { console.log(e) },
      () => {
        console.log(2)
      })
  }
}