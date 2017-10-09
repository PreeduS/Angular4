import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inputOutput',
  templateUrl: './inputOutput.component.html',
  styleUrls: ['./inputOutput.component.css']
})
export class InputOutputComponent implements OnInit {
  //substrVar: string = 'abcd1234'; //for summary pipe

  //for inputEx
  inputText = 'defText';
  updateInputText(){
    this.inputText = Math.random() + ' updated';
  }

  //for outputEx
  changeHandlerReceiver(e){
    console.log('[on inputOutput],received from outputEx ev = ', e)

  }


  constructor() { }

  ngOnInit() {
  }

}
