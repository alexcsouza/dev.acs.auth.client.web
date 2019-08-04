import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-bar-info-box',
  templateUrl: './bar-info-box.component.html',
  styleUrls: ['./bar-info-box.component.css']
})
export class BarInfoBoxComponent implements OnInit {

  @HostBinding('class') private styleClass = 'col-md-3 col-sm-6';

  constructor() { }

  ngOnInit() {
  }

}
