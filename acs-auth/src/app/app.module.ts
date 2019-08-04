import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { FooterComponent } from './footer/footer.component';
import { BarInfoBoxComponent } from './bar-info-box/bar-info-box.component';
import { PieInfoBoxComponent } from './pie-info-box/pie-info-box.component';
import { HorizontalInfoBoxComponent } from './horizontal-info-box/horizontal-info-box.component';
import { VerticalGraphInfoBoxComponent } from './vertical-graph-info-box/vertical-graph-info-box.component';
import { HorizontalListItemCardBoxComponent } from './horizontal-list-item-card-box/horizontal-list-item-card-box.component';
import { VerticalCardBoxComponent } from './vertical-card-box/vertical-card-box.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LateralMenuComponent,
    FooterComponent,
    BarInfoBoxComponent,
    PieInfoBoxComponent,
    HorizontalInfoBoxComponent,
    VerticalGraphInfoBoxComponent,
    HorizontalListItemCardBoxComponent,
    VerticalCardBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
