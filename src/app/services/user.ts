import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class User {

  environment: any

    constructor( private http:HttpClient ) {
      this.environment= environment
     }

  registerUser ( newUser: any ) {
    return this.http.post( `${ this.environment.apiUrl }/users`, newUser , {headers: this.getHeaders()})
  }
    loginUser ( user: any ) {
    return this.http.post<any>( `${ this.environment.apiUrl }/users/login`, user , {headers: this.getHeaders()})
  }
  getUser ( ) {
    return this.http.get<any>( `${ this.environment.apiUrl }/api/users`, {headers: this.getHeaders()})
  }
  getUserByRol(rol:string){
    return this.http.get<any>( `${ this.environment.apiUrl }´/users/rol/`+rol, {headers: this.getHeaders()})
  }

  getUserById ( id:string ) {
    return this.http.get<any>( `${ this.environment.apiUrl }´/users/` + id, {headers: this.getHeaders()})
  }
  deleteByIdUser ( id: string ) {
    return this.http.delete( `${ this.environment.apiUrl }/users/`+ id, {headers: this.getHeaders()})
  }
  updateByIdUser ( Id: string, updateUser:any ) {
    return this.http.patch( `${ this.environment.apiUrl }/users/` + Id, updateUser, {headers: this.getHeaders()})
  }
  saveLocalStorage ( key:string, value: any) {
    localStorage.setItem(key, value)
  }
  deleteLocalStorage ( key:string) {
    localStorage.removeItem(key)
  }
  verifyAuthenticateUser() {
    return this.http.get('', {headers: this.getHeaders()})
  }

  getHeaders() {
    const token = localStorage.getItem( 'token' ) ?? ''
    return new HttpHeaders().set('X-Token', token)
  }
}
