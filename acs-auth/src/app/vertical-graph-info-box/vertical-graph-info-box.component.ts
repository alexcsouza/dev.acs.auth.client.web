import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-graph-info-box',
  templateUrl: './vertical-graph-info-box.component.html',
  styleUrls: ['./vertical-graph-info-box.component.css']
})
export class VerticalGraphInfoBoxComponent implements OnInit {

  @HostBinding('class') private styleClass = 'col-lg-4';
  @Input() public graphId: string;

  constructor() { }

  ngOnInit() {
  }

}
