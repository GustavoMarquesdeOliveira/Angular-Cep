import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private readonly http: HttpClient) { }

  getadress(cep: number){
    return this.http.get<any>("https://cep.awesomeapi.com.br/json/" + cep)
  }

}