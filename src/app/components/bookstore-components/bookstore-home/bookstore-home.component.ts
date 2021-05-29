import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/service/data-sharing/data-sharing.service';

@Component({
  selector: 'app-bookstore-home',
  templateUrl: './bookstore-home.component.html',
  styleUrls: ['./bookstore-home.component.scss']
})
export class BookstoreHomeComponent implements OnInit {

  constructor(private dataSharing: DataSharingService) { }
  bookArray = []
  ngOnInit(): void {
    this.getAllBooks();

  }
  getAllBooks() {
    this.bookArray = [
      {
        bookName: 'Java',
        bookDescription: '',
        price: '',
        author: ''
      },
      {
        bookName: 'React Js',
        bookDescription: '',
        price: '',
        author: ''
      },
      {
        bookName: 'Angular',
        bookDescription: '',
        price: '',
        author: ''
      },
      {
        bookName: 'Angular js',
        bookDescription: '',
        price: '',
        author: ''
      }
    ]
    // calling change method of data service
    let obj = {
      type: 'getAllBook',
      data: this.bookArray
    }
    this.dataSharing.changeMessage(obj)
  }

}
