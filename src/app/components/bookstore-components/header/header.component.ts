import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/service/data-sharing/data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataSharing: DataSharingService) { }

  ngOnInit(): void {
    this.dataSharing.currentMessage.subscribe(data => {
      if (data.type == 'cart') {
        // i will do someThing
        console.log("in Header ===>   ", data);
      }

    })
  }

}
