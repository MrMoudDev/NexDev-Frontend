import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Company {

<<<<<<< HEAD
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
=======
  constructor( private http: HttpClient ) { }

  registerCompany( newCompany: any ) {
    this.http.post( 'http://localhost:3000/api/company', newCompany )
  }

  getCompanies() {}

  getCompanyById() {}

  deleteCompanyById() {}

  updateCompanyById() {}
>>>>>>> 501ed341f815f3dbd7b419b0894b38b1019b3ee0
}
