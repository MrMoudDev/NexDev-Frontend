import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class User {
    enviroment: any
    constructor( private http:HttpClient ) { 
      this.enviroment = environment
    }

  registerUser ( newUser: any ) {
    return this.http.post( `${ this.enviroment.apiURL }/users`, newUser )
  }
    loginUser ( user: any ) {
    return this.http.post( `${ this.enviroment.apiURL }/users/login`, user )
  }
  getUser ( ) {
    return this.http.get<any>( `${ this.enviroment.apiURL }/users`)
  }
  getUserByRol(rol:string){
    return this.http.get<any>( `${ this.enviroment.apiURL }/users/rol/`+rol)
  }

  getUserById ( id:string ) {
    return this.http.get<any>( `${ this.enviroment.apiURL }/users/` + id)
  }
  deleteByIdUser ( id: string ) {
    return this.http.delete( `${ this.enviroment.apiURL }/users/` + id)
  }
  updateByIdUser ( Id: string, updateUser:any ) {
    return this.http.delete( `${ this.enviroment.apiURL }/users/` + Id, updateUser)
  }
}
