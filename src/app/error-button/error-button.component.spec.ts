import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorButtonComponent } from './error-button.component';

describe('ErrorButtonComponent', () => {
  let component: ErrorButtonComponent;
  let fixture: ComponentFixture<ErrorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
