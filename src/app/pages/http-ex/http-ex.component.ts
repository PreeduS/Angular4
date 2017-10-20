import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'http-ex',
  templateUrl: './http-ex.component.html',
  styleUrls: ['./http-ex.component.scss']
})
export class HttpExComponent implements OnInit {
  posts:any;

  constructor(http : Http) { 
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      response =>{
        console.log('response = ', response);
        console.log('\nresponse.json() = ', response.json());
        this.posts = response.json().slice(0,5);
      }
    );
  }

  ngOnInit() {
  }

}
