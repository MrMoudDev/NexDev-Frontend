import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Company } from '../../../../services/company';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-edit',
  imports: [ ReactiveFormsModule ],
  templateUrl: './company-edit.html',
  styleUrl: './company-edit.css'
})
export class CompanyEdit {
  formData!: FormGroup;
  selectedId!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
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

  ngOnInit() {
    // Extraer el parametro que tiene el ID de la compañia
    this.activatedRoute.params.subscribe({
      next: ( data ) => {
        console.log( data );      // { id: 'fhtrbvrtjhytbyjhbytr' }     --> ID de la compañia

        this.selectedId = data[ 'id' ];   // Guardando el Id en el contexto de la clase

        // Invocar al Servicio solicitando la compañia por ID
        this.companyService.getCompanyById( data[ 'id' ] ).subscribe({
          next: ( data ) => {
            console.log( data );  // { ... }  --> Los datos de compañia

            // Actualizar los campos del formulario
            this.formData.patchValue({
              nombre: data[ 'nombre' ],
              descripcion: data.descripcion,
              logoUrl: data.logoUrl,
              sitioWeb: data.sitioWeb
            });

          },
          error: ( error ) => {
            console.error( error );
          },
          complete: () => {}
        });
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {}
    });
  }

  onSubmit() {
    // Verificando su el formulario es valido
    if( this.formData.valid ) {
      console.log( this.formData.value );

      // Invocamos el servicio que se encarga de actualizar la compania
      this.companyService.updateCompanyById( this.selectedId, this.formData.value).subscribe({
        next: ( data ) => {
          console.log( data );
          this.router.navigateByUrl( '/admin/companies' );  // Redirecciona a la lista de compañia
        },
        error: ( error ) => {
          console.error( error );
        },
        complete: () => {
          console.log( 'complete' );
        }
      });
    }
  }
}

