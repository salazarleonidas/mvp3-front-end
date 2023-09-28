import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Processo } from '../models/processo.model';
import { BackEnd_API } from '../constants'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Processo[]>{
    return this.http.get<Processo[]>(`${BackEnd_API}/processos`);
  }

  get(numeroProcesso: string) : Observable<Processo>{
    return this.http.get<Processo>(`${BackEnd_API}/processo/${numeroProcesso}`);
  }

  delete(numeroProcesso: string): Observable<any> {
    return this.http.delete<Processo>(`${BackEnd_API}/processo/${numeroProcesso}`);
  }

  update(processo : Processo): Observable<any> {
    return this.http.put(`${BackEnd_API}/processo`, processo);
  }

  create(processo: Processo): Observable<Processo> {
    return this.http.post<Processo>(`${BackEnd_API}/processo`, processo);
  }
}
