import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertion',
  templateUrl: './convertion.component.html',
  styleUrls: ['./convertion.component.scss']
})
export class ConvertionComponent implements OnInit {

  constructor() { }
  selectedValue: string;
  selectedCar: string;

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  ngOnInit() {
  }

}
