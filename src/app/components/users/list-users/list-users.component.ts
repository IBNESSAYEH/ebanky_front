import { Component, inject, Input } from '@angular/core';
import { EditIconComponent } from '../../icons/edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../icons/delete-icon/delete-icon.component';
import { CommonModule, DecimalPipe, NgClass } from '@angular/common';
import { UsersService } from '../../../services/users.service';
import { User, UserData } from '../../../models/user';

@Component({
  selector: 'app-list-users',
    imports: [
        EditIconComponent, DeleteIconComponent,
        DecimalPipe,
        NgClass, CommonModule
      ],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  accountService = inject(UsersService);

  @Input({required: true}) usersData: UserData[] = [];

  // @Output() deleteAccount = new EventEmitter();

  // requestDeleteAccount(id: string){
  //   this.deleteAccount.emit(id);
  // }
}
