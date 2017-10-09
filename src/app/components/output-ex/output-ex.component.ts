import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'output-ex',
  templateUrl: './output-ex.component.html',
  styleUrls: ['./output-ex.component.scss']
})
export class OutputExComponent implements OnInit {
  @Output('custom-change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickHandlerEmit(){
    this.change.emit('ev param: '+Math.random());
  }

}
