import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Company {

  constructor( private http: HttpClient ) { }

  registerCompany( newCompany: any ) {
    this.http.post( 'http://localhost:3000/api/company', newCompany )
  }

  getCompanies() {}

  getCompanyById() {}

  deleteCompanyById() {}

  updateCompanyById() {}
}
