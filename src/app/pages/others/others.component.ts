import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {
  substrVar: string = 'abcd1234'; //for summary pipe
  
  constructor() { }

  ngOnInit() {
  }

}
