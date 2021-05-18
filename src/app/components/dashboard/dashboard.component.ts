import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _userService: UserService) { }
  noteArray = []

  ngOnInit(): void {
    this.getAllNotes()
  }
  myFunction() {
    let arr = ['a', 'b', 'c', 'd'];
    let str = ''
    // for (const iterator of arr) {
    //   str += `_${iterator}`
    // }
    
    console.log("value is ",str);

  }



  getAllNotes() {
    let backendArray = [
      {
        title: 'angular 6',
        description: 'frontend',
        color: '#FFFFFF'
      },
      {
        title: 'react js',
        description: 'frontend',
        color: '	#00FF00'
      },
      {
        title: 'angular 6',
        description: 'frontend',
        color: ''
      },
      {
        title: 'react js',
        description: 'frontend',
        color: ''
      },
      {
        title: 'angular 6',
        description: 'frontend',
        color: ''
      },
      {
        title: 'react js',
        description: 'frontend',
        color: ''
      }
    ]
    this.noteArray = backendArray;
  }
  updateArray(value) {
    console.log('print in dashboard ---->  ', value);
    this.noteArray.push(value)

  }
}
