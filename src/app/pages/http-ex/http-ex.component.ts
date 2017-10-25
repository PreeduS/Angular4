import { Component, OnInit } from '@angular/core';
import { HttpExService } from '../../services/http-ex/http-ex.service';
//import { Http } from '@angular/http';

@Component({
  selector: 'http-ex',
  templateUrl: './http-ex.component.html',
  styleUrls: ['./http-ex.component.scss']
})
export class HttpExComponent implements OnInit {
  posts:any;

  //constructor(private http : Http) { }
  constructor(private service : HttpExService) { }

  ngOnInit() { 
    //this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      this.service.getData().subscribe(
      response =>{
        console.log('response = ', response);
        console.log('\nresponse.json() = ', response.json());
        this.posts = response.json().slice(0,5);
      },
      error =>{
        //console.log('error: ',error);
        //gloval error
        throw('global err')
      }
    );

    this.postData();

  }

  private postData():any{
      let params = {id:100};
      //this.http.post('https://jsonplaceholder.typicode.com/posts',params).subscribe(
      this.service.postData(params).subscribe(
        response => {
          console.log('post response = ', response);

        }
      );
  }
  //update: http.patch, http.put
  

}
