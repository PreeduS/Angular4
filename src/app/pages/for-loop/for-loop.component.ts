import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {
  
  list : string[] = ["list el A",'list el B','list el c'];
 
  constructor() { }

  ngOnInit() {
  }

  add(){
    this.list.push('new Item');
  }
  remove(index){ 
    this.list.splice(index,1);
  }

}
