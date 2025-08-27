import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment"


// Un servicio se encarga de hacer peticiones a cada EndPoint habilitado en el BackEnd
@Injectable({
  providedIn: 'root'
})
export class Company {
  enviroment: any

  constructor( private http: HttpClient ) { 
    this.enviroment = environment
  }

  registerCompany(newCompany: any) {
    console.log( newCompany );


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
  }
}
