import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieInfoBoxComponent } from './pie-info-box.component';

describe('PieInfoBoxComponent', () => {
  let component: PieInfoBoxComponent;
  let fixture: ComponentFixture<PieInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
