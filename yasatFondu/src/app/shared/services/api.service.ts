import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICity } from '../Models/city';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  public getCities(): Observable<ICity[]> {
    return this.http.get<ICity[]>(environment.apiUrl + '/api/Form');
  }
  
}
