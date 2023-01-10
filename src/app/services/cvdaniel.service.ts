import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CvdanielService {
  
  private API_PErsonajes = 'https://rickandmortyapi.com/api'
  http: any;
  constructor() { 
  }
 
  public getAllPersonajes(): Observable<any>{
    return this.http.get(this.API_PErsonajes);
  }
}
