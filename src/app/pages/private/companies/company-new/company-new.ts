import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Company } from '../../../../services/company';


@Component({
  selector: 'app-company-new',
  imports: [ ReactiveFormsModule ],
  templateUrl: './company-new.html',
  styleUrl: './company-new.css'
})
export class CompanyNew {
  formData!: FormGroup;

  constructor(
    private companyService: Company,
    private router: Router
  ) {
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

      // Invocamos el servicio que se encarga de registrar la compania
      this.companyService.registerCompany( this.formData.value ).subscribe({
        next: ( data ) => {
          console.log( data );
          // this.router.navigate( ['/admin', 'companies'] );
          this.router.navigateByUrl( '/admin/companies' );
        },
        error: ( error ) => {
          console.error( error );
        },
        complete: () => {
          console.log( 'Complete' );
          this.formData.reset();
        }
      });
    }
  }
}

