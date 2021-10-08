import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Covid } from '../entities/covid.entity';
import { map } from 'rxjs/operators'
import { Estados } from '../entities/estados.entity';
import { Cities } from '../entities/cities.entity';

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

getState(){
  return this.http.get<Estados[]>(`https:servicodados.ibge.gov.br/api/v1/localidades/estados`)
}

getCities(UF:any){
  return this.http.get<Cities[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
}

}

