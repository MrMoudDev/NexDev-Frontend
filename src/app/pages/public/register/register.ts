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
      console.log( this.formData.value );
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
