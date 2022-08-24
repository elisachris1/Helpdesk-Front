import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { client } from '../models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  constructor(private http: HttpClient) { }

  findById(id: any): Observable<client>{
    return this.http.get<client>(`${API_CONFIG.baseUrl}/clients/${id}`);
  }

  findAll(): Observable<client[]> {
    return this.http.get<client[]>(`${API_CONFIG.baseUrl}/clients`);
  }

  create (client: client): Observable<client>{
    return this.http.post<client>(`${API_CONFIG.baseUrl}/clients`, client);
  }

  update(client: client): Observable<client>{
    return this.http.put<client>(`${API_CONFIG.baseUrl}/clients/${client.id}`, client);
  }

  delete(id: any): Observable<client>{
    return this.http.delete<client>(`${API_CONFIG.baseUrl}/clients/${id}`);
}

}