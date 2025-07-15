import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// Un servicio se encarga de hacer peticiones a cada EndPoint habilitado en el BackEnd
@Injectable({
  providedIn: 'root'
})
export class Company {

  constructor(private http: HttpClient) { }

  registerCompany(newCompany: any) {
    console.log( newCompany );

    return this.http.post('http://localhost:3000/api/company', newCompany);
  }

  getCompanies() {
    return this.http.get<any>('http://localhost:3000/api/company');
  }

  getCompanyById(id: string) {
    return this.http.get<any>('http://localhost:3000/api/company/' + id);
  }

  deleteCompanyById(id: string) {
    return this.http.delete('http://localhost:3000/api/company/' + id);
  }

  updateCompanyById(id: string, updatedCompany: any) {
    return this.http.patch('http://localhost:3000/api/company/' + id, updatedCompany);
  }
}
