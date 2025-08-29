import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class Developer {
  enviroment: any
  environment: any

  constructor(private http: HttpClient, private userService:User) {
    this.environment = environment
  }

  registerDeveloper( newDeveloper: any ) {
  return this.http.post(`${ this.environment.apiUrl }/dev-profile`, newDeveloper, { headers: this.userService.getHeaders() })
  }

  getDeveloper() {
    return this.http.get(`${ this.environment.apiUrl }/dev-profile`);
  }

  getDeveloperById( id:string ) {
  return this.http.get(`${ this.environment.apiUrl }/dev-profile`+id);
  }

  deleteDeveloperById(id:string) {
    return this.http.delete(`${ this.environment.apiUrl }/dev-profile`+id,{ headers: this.userService.getHeaders() });
  }

  updateDeveloperById(id:string, updateDeveloper: any) {
    return this.http.patch(`´${ this.environment.apiUrl }/dev-profile`+id, updateDeveloper,{ headers: this.userService.getHeaders() });
  }
}
