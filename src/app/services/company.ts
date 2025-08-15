import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from './user';


// Un servicio se encarga de hacer peticiones a cada EndPoint habilitado en el BackEnd
@Injectable({
  providedIn: 'root'
})
export class Company {

  environment:any

  constructor( private http: HttpClient, private userService: User ) {
    this.environment = environment
  }

  registerCompany(newCompany: any) {
    console.log( newCompany );


    return this.http.post(`${ this.environment.apiUrl }/company`, newCompany, { headers: this.userService.getHeaders() });
}

  getCompanies() {
    return this.http.get<any>(`${ this.environment.apiUrl }/company`);
  }

  getCompanyById(id: string) {
    return this.http.get<any>(`${ this.environment.apiUrl }/company/` + id);
  }

  deleteCompanyById(id: string) {
    return this.http.delete(`${ this.environment.apiUrl }/company/` + id,{ headers: this.userService.getHeaders() });
  }

  updateCompanyById(id: string, updatedCompany: any) {
    return this.http.patch(`${ this.environment.apiUrl }/company/` + id, updatedCompany, { headers: this.userService.getHeaders() });
  }
}
