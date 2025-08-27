import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Developer {
  enviroment: any

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
  }
}
