import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-first-name',
  imports: [CommonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.scss'],
  standalone: true
})
export class FirstNameComponent {
  firstNameControl = input.required<FormControl>();
}