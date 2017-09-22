import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  title = 'Angular4';
  varA = "some var A";
  colspan = 2;
  isActive = true;
  textValue = "default value";

  constructor() { }

  ngOnInit() {
  }

  clickHandler(e,elRef){
      console.log('clicked, e = ', e);
      console.log('clicked, e.target = ', e.target);
      console.log('clicked, elRef = ', elRef);
  }

}
