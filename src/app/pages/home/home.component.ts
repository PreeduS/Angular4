import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  substrVar: string = 'abcd1234'; //for summary pipe

  //for inputEx
  inputText = 'defText';
  updateInputText(){
    this.inputText = Math.random() + ' updated';
  }


  constructor() { }

  ngOnInit() {
  }

}
