import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displaying-error',
  imports: [],
  templateUrl: './displaying-error.component.html',
  styleUrl: './displaying-error.component.css'
})
export class DisplayingErrorComponent {
  @Input({required: true}) errorMessage!: string;
}
