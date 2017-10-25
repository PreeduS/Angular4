import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpExService {
  
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : Http) { 
  }

  getData(){
    return this.http.get(this.url).catch(
      (error : Response ) => { 
        if( error.status === 404 ){
          return Observable.throw('Not found error');   //or classes
        }
        return Observable.throw('Fallback error');
      }

    );
    
  }


  postData(params) {
    return this.http.post(this.url,params);
  }

}
