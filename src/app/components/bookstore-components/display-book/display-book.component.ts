import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/service/data-sharing/data-sharing.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {

  constructor(private dataSharing: DataSharingService) { }
  books: any = []

  ngOnInit(): void {
    this.dataSharing.currentMessage.subscribe(data => {
      if (data.type == 'getAllBook') {
        // i will do someThing
        this.books = data.data
      }

    })
  }

}
