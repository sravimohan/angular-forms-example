import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNameComponent } from './first-name.component';

describe('FirstNameComponent', () => {
  let component: FirstNameComponent;
  let fixture: ComponentFixture<FirstNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
