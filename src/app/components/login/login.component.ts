import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {

  constructor() { }
  show = false
  cardArray = []
  openedBox = 1
  // component lifecycle hooks or method
  ngOnChanges() {
    console.log("i am in ng changes");
  }

  ngOnInit(): void {
    console.log("i am in ng init");
    // getAllNoteApi
    this.cardArray = [{
      title: 'test', description: 'new'
    }
      ,
    {
      title: 'test2', description: 'new'
    },
    {
      title: 'test3', description: 'new'
    }
    ]
  }
  login() {
    console.log(' login button is clicked');
  }
  openBox(box) {
    this.openedBox = box
  }
  ngOnDestroy() {
    console.log('i am in destroy');

  }

}
