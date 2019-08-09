import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOpportunityComponent } from './select-opportunity.component';

describe('SelectOpportunityComponent', () => {
  let component: SelectOpportunityComponent;
  let fixture: ComponentFixture<SelectOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
