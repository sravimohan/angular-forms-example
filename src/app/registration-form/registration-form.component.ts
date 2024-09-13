import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateOfBirthComponent } from '../date-of-birth/date-of-birth.component';
import { FirstNameComponent } from '../first-name/first-name.component';
import { LastNameComponent } from '../last-name/last-name.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registration-form',
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, FirstNameComponent, LastNameComponent, DateOfBirthComponent],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  standalone: true
})
export class RegistrationFormComponent {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      firstName: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
      dateOfBirth: new FormControl<Date>(new Date(), [Validators.required])
    });
  }

  get firstNameControl() {
    return this.formGroup.get('firstName') as FormControl;
  }

  get lastNameControl() {
    return this.formGroup.get('lastName') as FormControl;
  }

  get dateOfBirthControl() {
    return this.formGroup.get('dateOfBirth') as FormControl;
  }

  getControlErrors(controlName: string): unknown {
    return this.formGroup.get(controlName)?.errors;
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    } else {
      console.log('Form is invalid');
    }
  }
}