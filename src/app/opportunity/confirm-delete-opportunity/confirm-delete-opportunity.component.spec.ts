import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteOpportunityComponent } from './confirm-delete-opportunity.component';

describe('ConfirmDeleteOpportunityComponent', () => {
  let component: ConfirmDeleteOpportunityComponent;
  let fixture: ComponentFixture<ConfirmDeleteOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
