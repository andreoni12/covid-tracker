import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public retrieveBrazilStats(day: string, month: string, year: string): Observable<any> {
    return this.http.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/${year}${month}${day}`);
  }

  public retrieveCountryStats(): Observable<any> {
    return this.http.get(`https://covid19-brazil-api.now.sh/api/report/v1/countries`);
  }

  public retrieveStatesStats(state: string): Observable<any> {
    return this.http.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${state}`);
  }
}
