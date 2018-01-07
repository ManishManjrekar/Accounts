import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
userName:string='test name';
firstName:string='manjrekar';
lastName:string='raj';
  constructor() { }

  ngOnInit() {
  }

}


