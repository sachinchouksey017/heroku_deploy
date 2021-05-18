import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
// import { QuantityService } from "../../services/quantity-service/quantity.service";

@Component({
  selector: 'app-choose-type',
  templateUrl: './choose-type.component.html',
  styleUrls: ['./choose-type.component.scss']
})
export class ChooseTypeComponent implements OnInit {

  constructor(public userService: UserService) { }
  selected = 'length'
  ngOnInit() {
    // this.convert()
    this.userService.login({
      "email": "admin@codin.com",
      "password": "Codin@123"
    }).subscribe(data => {
      console.log('data is ', data);

    }, err => {
      console.log('err is ', err);

    })
  }

  // convert() {
  //   this.quantityService.convert({}).subscribe(data => {
  //     console.log("data after success", data);

  //   }, err => {
  //     console.log("err after", err);

  //   })
  // }
  select(type: string) {
    this.selected = type;
  }

}
