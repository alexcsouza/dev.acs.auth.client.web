import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCardBoxComponent } from './vertical-card-box.component';

describe('VerticalCardBoxComponent', () => {
  let component: VerticalCardBoxComponent;
  let fixture: ComponentFixture<VerticalCardBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCardBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
