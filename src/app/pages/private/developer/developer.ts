import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Developer } from '../../../services/developer';

@Component({
  selector: 'app-developer',
  imports: [],
  templateUrl: './developer.html',
  styleUrl: './developer.css'
})
export class Developers {
  developer: any[]=[];
  formData! : FormGroup;

  constructor(
    private developerService: Developer,
    private router:Router
  ) {

    //Declarar el formulario donde se van agrupar los campos
    this.formData = new FormGroup({
      nombre: new FormControl ("", [Validators.required]), //Definir un campo para el formulario
      stack: new FormControl(),
      experiencia: new FormControl(),
      portafolioUrl: new FormControl(),
      cvUrl: new FormControl()
    });
  }

  onSubmit() {
    //Verifiando si el formulario es valido 
    if(this.formData.valid){
    console.log(this.formData.value);

    //invocamos el servicio que se encarga de registrar al developer
      this.developerService.registerDeveloper(this.formData.value).subscribe({
        next: (data) => {
          console.log(data); 
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this.formData.reset();
        }
      })

    }
  }
}
