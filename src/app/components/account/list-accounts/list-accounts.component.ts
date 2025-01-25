import { CommonModule, CurrencyPipe, DecimalPipe, NgClass, NgOptimizedImage } from '@angular/common';
import { Account } from './../../../models/account/account';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditIconComponent } from '../../icons/edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../icons/delete-icon/delete-icon.component';

@Component({
  selector: 'app-list-accounts',
  standalone: true,
  imports: [
    EditIconComponent, DeleteIconComponent,
    DecimalPipe,
    CommonModule
  ],
  templateUrl: './list-accounts.component.html',
  styleUrl: './list-accounts.component.css'
})
export class ListAccountsComponent {
  @Input({required: true}) accountsData: Account[] = [];
  @Input({required: true}) ebankyCarts: string[] = [];

    @Output() deleteAccount = new EventEmitter();

    requestDeleteAccount(id: string){
      this.deleteAccount.emit(id);
    }
}
