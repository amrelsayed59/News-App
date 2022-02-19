import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, NewsList } from '@core/data/newsList';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment as env } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  newsFilters = new BehaviorSubject(null);

  constructor(private _http: HttpClient) { }

  getNewsList (): Observable<APIResponse<NewsList>> {
    // let params = new HttpParams().set('ordering', ordering);

    // if (search) {
    //   params = new HttpParams().set('ordering', ordering).set('search', search);
    // }

    return this._http.get<APIResponse<NewsList>>(`${env.BASE_URL}/96363b7b60639fdd6e7d`)
  }

  getNewsDetails (id: string): Observable<NewsList> {
    return this._http.get<NewsList>(`${env.BASE_URL}/96363b7b60639fdd6e7d/News/${id}`)
  }



}
