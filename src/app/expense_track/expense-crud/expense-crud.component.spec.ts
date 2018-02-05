import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCrudComponent } from './expense-crud.component';

describe('ExpenseCrudComponent', () => {
  let component: ExpenseCrudComponent;
  let fixture: ComponentFixture<ExpenseCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
