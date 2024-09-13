import { CommonModule, formatDate } from '@angular/common';
import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-date-of-birth',
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, ReactiveFormsModule],
  templateUrl: './date-of-birth.component.html',
  styleUrls: ['./date-of-birth.component.scss'],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class DateOfBirthComponent {
  dateOfBirthControl = input.required<FormControl<Date>>();
}
