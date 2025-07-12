import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {

    constructor( private http:HttpClient ) { }

  registerUser ( newUser: any ) {
    return this.http.post( 'http://localhost:3000/api/users/', newUser )
  }
  getUser ( ) {
    return this.http.get( 'http://localhost:3000/api/users/')
  }
  getUserById ( id:string ) {
    return this.http.get( 'http://localhost:3000/api/users/' + id)
  }
  deleteByIdUser ( id: string ) {
    return this.http.delete( 'http://localhost:3000/api/users/' + id)
  }
  updateByIdUser ( Id: string, updateUser:any ) {
    return this.http.delete( 'http://localhost:3000/api/users/' + Id, updateUser)
  }
}
