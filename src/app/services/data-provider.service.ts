import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  public URL:string = "http://localhost:3000/rest/carro/findAll/json";
  constructor(private httpClient: HttpClient) { }
  getResponse() {
    return this.httpClient.get(this.URL);
  }

}
