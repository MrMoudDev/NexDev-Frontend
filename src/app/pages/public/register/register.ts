import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ ReactiveFormsModule ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  public formData!: FormGroup;
  public roles: string[] = [ 'company', 'developer' ];

  constructor() {
    this.formData = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      rol: new FormControl(),
      developer: new FormGroup({
        nombre: new FormControl(),
        stack: new FormControl(),
        portafolioUrl: new FormControl(),
        cvUrl: new FormControl()
      }),
      company: new FormControl({
        nombre: new FormControl(),
        descripcion: new FormControl(),
        logoUrl: new FormControl(),
        sitioWeb: new FormControl()
      })
    })
  }

  onSubmit() {
    if( this.formData.valid ) {
      console.log( this.formData.value );
    }
  }
}
