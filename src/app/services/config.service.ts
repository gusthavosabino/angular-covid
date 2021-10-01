import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Covid, Paises } from '../entities/covid.entity';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

private base_url = 'https://covid19-brazil-api.now.sh/api/report/v1';

constructor(
  private http: HttpClient
  ) { }
  
getInfo(): Observable<Covid[]> {
  return this.http.get<{data: Covid[]}>(this.base_url).pipe(map(res => {
    return res.data;
  }));
}

getInfoPaises(): Observable<Paises[]>{
  return this.http.get<{data: Paises[]}>(this.base_url + '/countries').pipe(map(res => {
    return res.data;
  }));
}

}

