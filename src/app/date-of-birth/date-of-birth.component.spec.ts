import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOfBirthComponent } from './date-of-birth.component';

describe('DateOfBirthComponent', () => {
  let component: DateOfBirthComponent;
  let fixture: ComponentFixture<DateOfBirthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateOfBirthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateOfBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
