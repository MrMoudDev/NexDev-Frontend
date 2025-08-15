import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class Aplication {

  environment: any

  constructor( private http:HttpClient, private userService:User) {
    this.environment = environment
   }

  registerAplication ( newAplication: any) {
    return this.http.post( `${ this.environment.apiUrl }/aplication`, newAplication, { headers: this.userService.getHeaders() })
  }
  deleteByIdAplication ( id: string) {
    return this.http.delete( `${ this.environment.apiUrl }/aplication` + id, { headers: this.userService.getHeaders() })
  }
  getAplication (  ) {
    return this.http.get<any>( `${ this.environment.apiUrl }/aplication`, { headers: this.userService.getHeaders() })
  }
}

