import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Covid } from '../entities/covid.entity';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

private url = 'https://covid19-brazil-api.now.sh/api/report/v1';

constructor(
  private http: HttpClient
  ) { }
  
getInfo(): Observable<Covid> {
  return this.http.get<Covid>(this.url);
}

}

