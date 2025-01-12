import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './delete-icon.component.html',
  styleUrl: './delete-icon.component.css'
})
export class DeleteIconComponent {
  @Input({required: true}) size: number = 6;
}
