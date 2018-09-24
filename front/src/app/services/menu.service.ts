import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private http: HttpClient;
  private restUrl: String;

  constructor(http: HttpClient) {
    this.http = http;
    this.restUrl = 'http://localhost:3010';
  }


  public getList(): Observable<any> {
    return this.http.get(`${this.restUrl}/menuList`);
  }


}
