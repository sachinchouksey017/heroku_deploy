import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }
  number = 0;
  @Input() startWith = 0;
  @Input() endWith = 100;
  @Input() totalTime = 4000;
  @Input() suffix = ''
  @Input() prefix = ''

  ngOnInit() {
    this.counterUp();
  }

  counterUp() {
    this.number = this.startWith ? this.startWith : 0;
    this.endWith = this.endWith ? this.endWith : 100;
    let sec = this.totalTime ? this.totalTime / (this.endWith - this.startWith) : 4000 / (this.endWith - this.startWith);
    const time = setInterval(() => {
      this.number++;
      if (this.number >= this.endWith)
        clearInterval(time)
    }, sec)
    console.log(` ${this.number} ${this.startWith} ${this.endWith} ${sec} `);

  }
}
