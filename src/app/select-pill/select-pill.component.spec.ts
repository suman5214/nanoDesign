import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPillComponent } from './select-pill.component';

describe('SelectPillComponent', () => {
  let component: SelectPillComponent;
  let fixture: ComponentFixture<SelectPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
