import { AccountService } from './../../../services/account.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Account } from '../../../models/account/account';
import { DeleteIconComponent } from '../../icons/delete-icon/delete-icon.component';
import { EditIconComponent } from '../../icons/edit-icon/edit-icon.component';
import { CommonModule, CurrencyPipe, DecimalPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-grid-accounts',
  standalone: true,
   imports: [
    EditIconComponent, DeleteIconComponent,
    DecimalPipe,
    NgClass, CommonModule
  ],
  templateUrl: './grid-accounts.component.html',
  styleUrl: './grid-accounts.component.css'
})
export class GridAccountsComponent {

  accountService = inject(AccountService);

  @Input({required: true}) accountsData: Account[] = [];
  @Input({required: true}) ebankyCarts: string[] = [];

  @Output() deleteAccount = new EventEmitter();

  requestDeleteAccount(id: string){
    this.deleteAccount.emit(id);
  }




}
