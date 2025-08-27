import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Aplication {
    enviroment: any

  constructor( private http:HttpClient) {
    this.enviroment = environment
  }

  registerAplication ( newAplication: any) {
    return this.http.post( `${ this.enviroment.apiURL }/aplication`, newAplication)
  }
  deleteByIdAplication ( id: string) {
    return this.http.delete( `${ this.enviroment.apiURL }/aplication` + id)
  }
  getAplication (  ) {
    return this.http.get<any>( `${ this.enviroment.apiURL }/aplication`  )
  }
}

