import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarInfoBoxComponent } from './bar-info-box.component';

describe('BarInfoBoxComponent', () => {
  let component: BarInfoBoxComponent;
  let fixture: ComponentFixture<BarInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
