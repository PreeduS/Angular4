import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  userData : string;
  constructor(users : UsersService) {
      this.userData = users.getUsers();

  }

  ngOnInit() {

  }

}
