import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-accounts',
  imports: [],
  templateUrl: './form-accounts.component.html',
  styleUrl: './form-accounts.component.css'
})
export class FormAccountsComponent {
  accountForm: FormGroup;
  previewImage: string | null = null;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      initialBalance: ['', [Validators.required, Validators.min(100)]],
      accountNumber: [{ value: '', disabled: true }]
    });
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.accountForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      formData.append('initialBalance', this.accountForm.get('initialBalance')?.value);
      // Add your API call here
      console.log('Form Data:', formData);
    }
  }
}
