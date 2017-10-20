import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pr-form-array',
  templateUrl: './pr-form-array.component.html',
  styleUrls: ['./pr-form-array.component.scss']
})
export class PrFormArrayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  form = new FormGroup({
    fArray : new FormArray([
     new FormControl('',[Validators.required, Validators.minLength(3)]),
      new FormControl('')
    ])
    
  });

  //just push others
  addElement(el: HTMLInputElement) : FormArray | null{
    if(el.value === ''){return null;}
    console.log('add');
    (this.form.get('fArray') as FormArray).push( new FormControl( el.value ) );

    console.log( ( this.form.get('fArray') as FormArray).controls )
    console.log(  this.form.get('fArray').valid )
    console.log( ( this.form.get('fArray') as FormArray).valid )
 
  }

}
