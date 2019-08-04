import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalListItemCardBoxComponent } from './horizontal-list-item-card-box.component';

describe('HorizontalListItemCardBoxComponent', () => {
  let component: HorizontalListItemCardBoxComponent;
  let fixture: ComponentFixture<HorizontalListItemCardBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalListItemCardBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalListItemCardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
