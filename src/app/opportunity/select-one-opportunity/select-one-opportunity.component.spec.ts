import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOneOpportunityComponent } from './select-one-opportunity.component';

describe('SelectOneOpportunityComponent', () => {
  let component: SelectOneOpportunityComponent;
  let fixture: ComponentFixture<SelectOneOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOneOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOneOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
