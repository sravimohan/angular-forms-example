import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-last-name',
  imports: [CommonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.scss'],
  standalone: true
})
export class LastNameComponent {
  lastNameControl = input.required<FormControl>();
}