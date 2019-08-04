import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-pie-info-box',
  templateUrl: './pie-info-box.component.html',
  styleUrls: ['./pie-info-box.component.css']
})
export class PieInfoBoxComponent implements OnInit {

  @HostBinding('class') private styleClass = 'col-lg-4';

  @Input() public graphId: string;

  constructor() { }

  ngOnInit() {
  }

}
