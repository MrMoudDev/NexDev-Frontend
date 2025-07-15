import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Developer {

  constructor(private http: HttpClient) { }

  registerDeveloper( newDeveloper: any ) {
  return this.http.post("http://localhost:3000/api/dev-profile", newDeveloper)
  }

  getDeveloper() {
    return this.http.get("http://localhost:3000/api/dev-profile");
  }

  getDeveloperById( id:string ) {
  return this.http.get("http://localhost:3000/api/dev-profile"+id);
  }

  deleteDeveloperById(id:string) {
    return this.http.delete("http://localhost:3000/api/dev-profile"+id);
  }

  updateDeveloperById(id:string, updateDeveloper: any) {
    return this.http.patch("http://localhost:3000/api/dev-profile"+id, updateDeveloper);
  }
}
