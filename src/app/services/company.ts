import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { environment } from "../../environments/environment"
=======
import { environment } from '../../environments/environment';
import { User } from './user';
>>>>>>> refs/remotes/origin/main


// Un servicio se encarga de hacer peticiones a cada EndPoint habilitado en el BackEnd
@Injectable({
  providedIn: 'root'
})
export class Company {
  enviroment: any

<<<<<<< HEAD
  constructor( private http: HttpClient ) { 
    this.enviroment = environment
=======
  environment:any

  constructor( private http: HttpClient, private userService: User ) {
    this.environment = environment
>>>>>>> refs/remotes/origin/main
  }

  registerCompany(newCompany: any) {
    console.log( newCompany );


<<<<<<< HEAD
    return this.http.post(`${ this.enviroment.apiURL }/company`, newCompany);
}

  getCompanies() {
    return this.http.get<any>(`${ this.enviroment.apiURL }/company`);
  }

  getCompanyById(id: string) {
    return this.http.get<any>(`${ this.enviroment.apiURL }/company/` + id);
  }

  deleteCompanyById(id: string) {
    return this.http.delete(`${ this.enviroment.apiURL }/company/` + id);
  }

  updateCompanyById(id: string, updatedCompany: any) {
    return this.http.patch(`${ this.enviroment.apiURL }/company/` + id, updatedCompany);
=======
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
>>>>>>> refs/remotes/origin/main
  }
}
