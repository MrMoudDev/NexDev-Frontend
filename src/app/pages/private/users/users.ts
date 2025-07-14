import { Component } from '@angular/core';
import { User } from '../../../services/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [ RouterLink ],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  users: any[] = [];

  constructor ( private userService: User) { }
    ngOnInit () {
      this.userService.getUser().subscribe({
        next: (data) => {
          console.log(data);
          this.users = data;
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log('complete')
        }
      })
    }
    onDelete ( id:string) {
      console.log('Elimina el registro con ID:' + id)
      this.userService.deleteByIdUser( id ).subscribe({
        next: (data) => {
          console.log(data);
          this.ngOnInit();
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log('complete')
        }
      })
    }
}