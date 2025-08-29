import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
<<<<<<< HEAD
=======
import { User } from './user';
>>>>>>> refs/remotes/origin/main

@Injectable({
  providedIn: 'root'
})
export class Developer {
  enviroment: any

<<<<<<< HEAD
  constructor(private http: HttpClient) {
    this.enviroment = environment
  }

  registerDeveloper( newDeveloper: any ) {
  return this.http.post(`${ this.enviroment.apiURL }/dev-profile`, newDeveloper)
  }

  getDeveloper() {
    return this.http.get(`${ this.enviroment.apiURL }/dev-profile`);
  }

  getDeveloperById( id:string ) {
  return this.http.get(`${ this.enviroment.apiURL }/dev-profile`+id);
  }

  deleteDeveloperById(id:string) {
    return this.http.delete(`${ this.enviroment.apiURL }/dev-profile`+id);
  }

  updateDeveloperById(id:string, updateDeveloper: any) {
    return this.http.patch(`${ this.enviroment.apiURL }/dev-profile`+id, updateDeveloper);
=======
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
>>>>>>> refs/remotes/origin/main
  }
}
