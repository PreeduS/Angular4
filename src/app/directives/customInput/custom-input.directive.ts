import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customInput]'
})
export class CustomInputDirective implements OnInit {

  @Input('mode') mode: string;

  constructor(private eRef : ElementRef) {  }
  
  ngOnInit (){   
    this.mode = this.mode !== undefined ? this.mode : 'lowercase';
  }
 

  @HostListener('keyup') onKeyUp(){
   
    if(this.mode =='lowercase'){
      this.eRef.nativeElement.value =  this.eRef.nativeElement.value.toLowerCase();
    }else  if(this.mode =='uppercase'){
      this.eRef.nativeElement.value =  this.eRef.nativeElement.value.toUperCase();
    }

  }

}
