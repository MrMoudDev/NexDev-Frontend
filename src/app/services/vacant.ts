import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Vacant {

  constructor( private http:HttpClient) {}

    getVacant ( ) {
    return this.http.get<any>( 'http://localhost:3000/api/vacant'  )
  }

  registerVacant(vacant: any){
    return this.http.post<any>( 'http://localhost:3000/api/vacant',vacant  )

  }
}

