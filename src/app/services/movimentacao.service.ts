import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

//const baseUrl = 'http://localhost:8080';
const baseUrl= environment.API_URL;

@Injectable({
    providedIn: 'root'
})
export class MovimentacaoService {

    constructor(private http: HttpClient) { }
  
    list(): Observable<any> {
        return this.http.get(`${baseUrl}/movimentacoes`);
    }
    findByIdConta(idConta:any): Observable<any> {
        return this.http.get(`${baseUrl}/movimentacoes/${idConta}`);
    }
    create(movimentacao:any): Observable<any> {
        return this.http.post(`${baseUrl}/movimentacoes`,movimentacao);
    }
}
