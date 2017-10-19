import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';

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
    inputA : new FormControl('', 
           [Validators.required, Validators.minLength(3),this.noWhiteSpace ]
            ),
    inputB : new FormControl('', Validators.required),
   
    userSys: new FormGroup({
      username : new FormControl('', Validators.required, this.doUserExists),
      password : new FormControl('', Validators.required),     
    })
    
    
  });

  //custom validator 
  noWhiteSpace(control: FormControl ): ValidationErrors | null{

    if(control.value.indexOf(' ') !== -1){
      return{containsWhiteSpace:true}
    }
  return null;
    
  }

  //custom async validation
  //AsyncValidatorFn - used in FormGroup,3rd param - return promise
  doUserExists(control:AbstractControl): Promise<ValidationErrors | null>{
      
    return new Promise((resolve, reject) => {

      setTimeout(()=>{
        if(control.value.toLowerCase() === 'user1'){
          resolve( {userExists:true} );
        }else{
          resolve( null );
        }
       
      },1500);

    })

  }


  login():any{
    //loginStatus = someLoginService.login(); ...

    this.form.setErrors({'loginFailed':true})
  }


}
