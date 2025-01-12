import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './add-icon.component.html',
  styleUrl: './add-icon.component.css'
})
export class AddIconComponent {
  @Input({required: true}) size: number = 6;

}
