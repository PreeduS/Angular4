import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-ex',
  templateUrl: './input-ex.component.html',
  styleUrls: ['./input-ex.component.scss']
})
export class InputExComponent implements OnInit {
  //added in home component & here

  @Input('input-data') inputData: string;
    //<input-ex [input-data]="inputText"></input-ex> 
    //changes outside reflects/updates here
    //changes here don't update outside

  constructor() { }

  ngOnInit() {
    console.log('inputData = ' + this.inputData);
  }

  updateInputData(){
    this.inputData = Math.random() + ' updated';
  }


  ngOnChanges(changes){
    console.log('changes = ', changes);

    if(changes.inputData){
      console.log(
        'changes.inputData = ', 
        changes.inputData.currentValue, 
        changes.inputData.previousValue);
    }
  }

}
