import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Aplication {

  constructor( private http:HttpClient) { }

  registerAplication ( newAplication: any) {
    return this.http.post( 'http://localhost:3000/api/aplication', newAplication)
  }
  deleteByIdAplication ( id: string) {
    return this.http.delete( 'http://localhost:3000/api/aplication' + id)
  }
  getAplication (  ) {
    return this.http.get<any>( 'http://localhost:3000/api/aplication'  )
  }
}

