import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IPersonaje } from '../interfaces/personajes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  url:string = environment.BASE_URL;

  cantidadItem:number = 0;

  constructor(
    private http: HttpClient
  ) { }

  consultarSimpsons(): Observable<IPersonaje>{
    //## PARA EL INGRESO DE PARAMETROS
    const params = new HttpParams()
    .set("apikey", "<valor>")
    .set("hash", "<valor>")
    .set("ts", "<valor>")
    return this.http.get<IPersonaje>(`${this.url}quotes`, { params: params });
    //return this.http.get<IPersonaje>(`${this.url}quotes`);
  }

  consultarSimpsonsCantidad(cantidad: number): Observable<IPersonaje[]>{
    return this.http.get<IPersonaje[]>(`${this.url}quotes?count=${cantidad}`);
  }
}
