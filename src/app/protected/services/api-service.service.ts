import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  // definicion de las variables de configuracion credenciales del api 
  private baseUrl: string = environment.baseUrl;
  private baseUrlId: string = environment.baseUrlId;


  constructor(private http: HttpClient) { }

  getHeroes(){

    // aqui extraemos informacion o datos de los super hereoes provenientes del api
    return this.http.get<any>(`${this.baseUrl}`)
    .pipe(map((resp:any) =>{
      return resp.data.results;
    }))
  }

  // Aqui deje planteado la logica para extraer valores de superheroes por su id para la parte de busqueda
  // getHoroeId(){
  //   return this.http.get<any>(`${this.baseUrlId}`)
  //   .pipe(map((resp:any) =>{
  //     return resp.data.results;
  //   }))
  // }

}

