import { Component } from '@angular/core';
import { User } from '../../../services/user';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [ RouterLink ],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  users: any[] = []; 
  selectedRol!:string;

  constructor ( private userService: User, private activatedRoute:ActivatedRoute) {}
    ngOnInit () { 
      this.activatedRoute.params.subscribe({
        next: (data) => {
          console.log(data);
          this.selectedRol=data['rol'];
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log('complete')
        }
      })
      if(this.selectedRol=="developer"||this.selectedRol=="company"){
        this.userService.getUserByRol(this.selectedRol).subscribe({
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
      else{
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