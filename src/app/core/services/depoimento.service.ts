import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Depoimentos } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {
  private apiUrl: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) {
  }

  listar() : Observable<Depoimentos[]>{
    return this.http.get<Depoimentos[]>(`${this.apiUrl}/depoimentos`);
  }
}
