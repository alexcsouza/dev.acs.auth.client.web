import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-info-box',
  host: { 'class': 'col-md-3 col-sm-6' },
  templateUrl: './bar-info-box.component.html',
  styleUrls: ['./bar-info-box.component.css']
})
export class BarInfoBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
