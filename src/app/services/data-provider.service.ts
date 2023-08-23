import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  public urlCarros:string = "http://localhost:3000/rest/carro/findAll/json";
  public urlPersonas:string = "http://localhost:3000/rest/persona/findAll/json";
  public urlCarroByPersona:string = `http://localhost:3000/rest/carro/findByPersona/1/json`;
  constructor(private httpClient: HttpClient) { }
  getResponseCarro() {
    return this.httpClient.get(this.urlCarros);
  }
  getResponsePersona() {
    return this.httpClient.get(this.urlPersonas);
  }

  getResponseCarroByPersona(id:number){
    this.urlCarroByPersona = `http://localhost:3000/rest/carro/findByPersona/${id}/json`;
    return this.httpClient.get(this.urlCarroByPersona);
  }
}
