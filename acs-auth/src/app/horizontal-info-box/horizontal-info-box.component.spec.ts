import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalInfoBoxComponent } from './horizontal-info-box.component';

describe('HorizontalInfoBoxComponent', () => {
  let component: HorizontalInfoBoxComponent;
  let fixture: ComponentFixture<HorizontalInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
