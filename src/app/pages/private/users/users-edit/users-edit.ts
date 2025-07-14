import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../services/user';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-edit',
  imports: [ ReactiveFormsModule ],
  templateUrl: './users-edit.html',
  styleUrl: './users-edit.css'
})
export class UsersEdit {
  formData!: FormGroup;
  selectedId!: string
  public roles: string[] = [ 'company', 'developer' ];


  constructor (
    private activatedRoute: ActivatedRoute,
    private userService: User
  ) {
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
  ngOnInit () {

    this.onToggleRol();   // Activa o desactiva formularios anidados por defecto
    this.formData.get( 'rol' )?.valueChanges.subscribe( () => this.onToggleRol() );

    this.activatedRoute.params.subscribe({
      next: (data ) => {
        console.log(data)

        this.selectedId = data['id']

        this.userService.getUserById(data[ 'id']).subscribe({
          next: (data) => {
            console.log(data)
            this.formData.patchValue({
              email: data.email,
              password: data.password,
              rol: data.rol
            })
          },
          error: (error) => {
            console.error(error)
          },
          complete: () => {}
        })
      },
      error: (error) => {
        console.error(error)
      },
      complete: () => {}
    })
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

  onSubmit(){
    if( this.formData.valid ) {
      console.log( this.formData.value);

      this.userService.updateByIdUser(this.selectedId, this.formData.value).subscribe({
        next: ( data ) => {
          console.log(data)
        },
        error: (error) => {
          console.error(error)
        },
        complete: () => {
          console.log('complete')
        }
      })
    }
  }
}
