import { Component, HostBinding, Input } from '@angular/core';

/*
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: []
})
*/
export class PageComponent {

  @HostBinding('class') styleClass = 'page-content';

  constructor(@Input() public title: string = '', @Input() public breadcrumb: string = '') {}

}
