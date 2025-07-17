import { Component } from '@angular/core';
import { User } from '../../../services/user';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  public formData!: FormGroup

  constructor (private userService:User,
    private router : Router
  )
  {
    this.formData = new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
    })

  }

  
  ngOnInit() {
  }

  
  onSubmit() {
    if( this.formData.valid ) {
      console.log( this.formData.value.email);
      const data = {
        email: this.formData.value.email,
        password: this.formData.value.password
      }
      this.userService.loginUser(data).subscribe({
        next: (data) => {
          console.log(data)
          // this.router.navigateByUrl('/login');
        },
        error: (error) => {
          console.error(error)
            this.router.navigateByUrl('/register');
        },
        complete: () => {
          this.formData.reset()
        }
      })
    }
  }

}
