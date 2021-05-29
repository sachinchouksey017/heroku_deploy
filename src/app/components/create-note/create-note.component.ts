import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  createNote() {
    // this.messageEvent.emit({
    //   title: 'create note',
    //   description: 'frontend',
    //   color: ''
    // })

  }

}
