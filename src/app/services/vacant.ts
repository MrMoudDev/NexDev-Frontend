import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Vacant {
  enviroment: any
  constructor( private http:HttpClient) {
    this.enviroment = environment
  }

    getVacant ( ) {
    return this.http.get<any>( `${ this.enviroment.apiURL }/vacant`  )
  }

  registerVacant(vacant: any){
    return this.http.post<any>( `${ this.enviroment.apiURL }/vacant`,vacant  )

  }
}

