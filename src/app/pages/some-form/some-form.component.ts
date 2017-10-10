import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'some-form',
  templateUrl: './some-form.component.html',
  styleUrls: ['./some-form.component.scss']
})
export class SomeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectList : {id:number, name:string}[] = [
    {id: 1, name: 'aaa'},
    {id: 2, name: 'bbb'},
    {id: 3, name: 'ccc'}
  
  ];

  submitHandler(formData){
    console.log('formData: ',formData)
    console.log('formData.value: ',formData.value)
  }

}
