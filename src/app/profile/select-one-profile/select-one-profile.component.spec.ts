import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOneProfileComponent } from './select-one-profile.component';

describe('SelectOneProfileComponent', () => {
  let component: SelectOneProfileComponent;
  let fixture: ComponentFixture<SelectOneProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOneProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOneProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
