import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pr-form',
  templateUrl: './pr-form.component.html',
  styleUrls: ['./pr-form.component.scss']
})
export class PrFormComponent implements OnInit {

  constructor() {  }

  ngOnInit() { 
     console.log(this.form);
     
     //console.log('FormControl:\n', new FormControl)
  }
  

  form = new FormGroup({
    inputA : new FormControl('', [Validators.required, Validators.minLength(3),this.noWhiteSpace ]),
    inputB : new FormControl('', Validators.required)
   /* group: new FormGroup({
      cb1 : new FormControl('', Validators.required),
      cb2 : new FormControl('', Validators.required),     
    })
    */
    //eqweqwe: new FormGroup( form controlls ...)
  });

  //custom validator 
  noWhiteSpace(control: FormControl ){

    if(control.value.indexOf(' ') !== -1){
      return{containsWhiteSpace:true}
    }
  return null;
    
  }
  submitHandler(){
    console.log(this.form)
  }


}
