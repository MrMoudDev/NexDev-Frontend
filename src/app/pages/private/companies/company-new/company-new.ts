import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-new',
  imports: [ ReactiveFormsModule ],
  templateUrl: './company-new.html',
  styleUrl: './company-new.css'
})
export class CompanyNew {
  formData!: FormGroup;

  constructor() {
    // Declarar formulario donde se van a agrupar los campos
    this.formData = new FormGroup({
      nombre: new FormControl( '', [ Validators.required ] ),   // Definir una campo para el formulario
      descripcion: new FormControl(),
      logoUrl: new FormControl( '', [ Validators.required ]),
      sitioWeb: new FormControl( '', [ Validators.required ])
    });
  }

  onSubmit() {
    // Verificando su el formulario es valido
    if( this.formData.valid ) {
      console.log( this.formData.value );
      this.formData.reset();
    }
  }
}

