import { Component, Input, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/service/data-service/data-sharing.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() array;
  constructor(private data: DataSharingService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(res => {
      console.log('data in display component ===>',res);

    })
  }

}
