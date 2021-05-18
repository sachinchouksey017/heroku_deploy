import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataSharingService } from 'src/app/service/data-service/data-sharing.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();

  constructor(private data: DataSharingService) { }

  ngOnInit(): void {
  }
  createNote() {
    // this.messageEvent.emit({
    //   title: 'create note',
    //   description: 'frontend',
    //   color: ''
    // })

    this.data.changeMessage('data from create note')
  }

}
