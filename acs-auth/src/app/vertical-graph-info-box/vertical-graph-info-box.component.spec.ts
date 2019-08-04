import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalGraphInfoBoxComponent } from './vertical-graph-info-box.component';

describe('VerticalGraphInfoBoxComponent', () => {
  let component: VerticalGraphInfoBoxComponent;
  let fixture: ComponentFixture<VerticalGraphInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalGraphInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalGraphInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
