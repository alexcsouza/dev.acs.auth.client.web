import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-vertical-card-box',
  templateUrl: './vertical-card-box.component.html',
  styleUrls: ['./vertical-card-box.component.css']
})
export class VerticalCardBoxComponent implements OnInit {

  @HostBinding('class') styleClass = 'col-lg-4';

  constructor() { }

  ngOnInit() {
  }

}
