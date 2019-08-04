import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent extends PageComponent implements OnInit {

  constructor() { super('Manage Users', 'Users / Manage Users'); }

  ngOnInit() {
  }

}
