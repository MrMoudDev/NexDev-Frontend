import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class Vacant {

  environment: any

  constructor( private http:HttpClient, private userService: User) {
    this.environment = environment
  }

  getVacant ( ) {
    return this.http.get<any>( `${ this.environment.apiUrl }/vacant` )
  }

  registerVacant(vacant: any){
    return this.http.post<any>( `${ this.environment.apiUrl }/vacant`,vacant, { headers: this.userService.getHeaders() }  )

  }
}

