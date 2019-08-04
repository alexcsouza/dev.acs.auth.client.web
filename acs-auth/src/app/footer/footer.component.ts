import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @HostBinding('class') private styleClass = 'footer';

  constructor() { }

  ngOnInit() {
  }

}
