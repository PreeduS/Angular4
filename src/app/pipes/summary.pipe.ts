import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

//{{substrVar +' = '+ ( substrVar | summary:2:2 ) }}
//called from home

 // transform(value: any, arg1?: any, arg2?: any): any {
  transform(value: string, ...args: number[]): string {
    
    let limit: number = (args[0] === undefined) ? 4 : args[0]; 
    let newValue: string = value.substr(0,limit) + '...';

    return newValue;
  }


}
