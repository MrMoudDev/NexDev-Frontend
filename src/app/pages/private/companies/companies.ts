import { Component } from '@angular/core';
import { Company } from '../../../services/company';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-companies',
  imports: [ RouterLink ],
  templateUrl: './companies.html',
  styleUrl: './companies.css'
})
export class Companies {
  companies: any[] = [];

  constructor( private companyService: Company ) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe({
      next: (data) => {
        console.log(data);
        this.companies = data;    // Guardamos los resultados del servicio
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  onDelete( id: string ) {
    console.log( 'Elimina el registro con ID:' + id );
    this.companyService.deleteCompanyById( id ).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();    // Actualiza los datos en la vista
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

}
