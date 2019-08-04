import { Input, Component, HostBinding } from '@angular/core';

//@Component({
  //selector: 'app-page',
  //templateUrl: './dashboard.component.html',
  //styleUrls: ['./dashboard.component.css']
//})
export class PageComponent{

  @HostBinding('class') styleClass = 'page-content';

  constructor(@Input() public title: string = '') {}

  ngOnInit() {
  }

}
