import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-new',
  imports: [ ReactiveFormsModule],
  templateUrl: './users-new.html',
  styleUrl: './users-new.css'
})
export class UsersNew {
  public formData!: FormGroup;
  public roles: string[] = [ 'company', 'developer' ];

  constructor( private userService:User,
    private router: Router) {
    this.formData = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      rol: new FormControl(),
      developer: new FormGroup({
        nombre: new FormControl(),
        stack: new FormControl(),
        experiencia: new FormControl(),
        portafolioUrl: new FormControl(),
        cvUrl: new FormControl()
      }),
      company: new FormGroup({
        nombre: new FormControl(),
        descripcion: new FormControl(),
        logoUrl: new FormControl(),
        sitioWeb: new FormControl()
      })
    })
  }

  ngOnInit() {
    this.onToggleRol();   // Activa o desactiva formularios anidados por defecto
    this.formData.get( 'rol' )?.valueChanges.subscribe( () => this.onToggleRol() );
  }

  onSubmit() {
    if( this.formData.valid ) {
      console.log( this.formData.value);
      // console.log(this.formData.get("rol")?.value)
      this.userService.registerUser(this.formData.value).subscribe({
        next: (data) => {
          this.router.navigate(['/admin','users',this.formData.get("rol")?.value]);
        },
        error: (error) => {
          console.error(error)
        },
        complete: () => {
          this.formData.reset()
        }
      })
    }
  }

  onToggleRol() {
    const rol = this.formData.get( 'rol' )?.value;

    const formDataDeveloper = this.formData.get( 'developer' ) as FormGroup;
    const formDataCompany = this.formData.get( 'company' ) as FormGroup;

    if( rol == 'developer' ) {
      formDataDeveloper.enable();
      formDataCompany.disable();
    }
    else {
      formDataDeveloper.disable();
      formDataCompany.enable();
    }
  }
}
