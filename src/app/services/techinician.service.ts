import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { technician } from '../models/techinician';

@Injectable({
  providedIn: 'root'
})
export class TechinicianService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<technician>{
    return this.http.get<technician>(`${API_CONFIG.baseUrl}/technicians/${id}`);
  }

  findAll(): Observable<technician[]> {
    return this.http.get<technician[]>(`${API_CONFIG.baseUrl}/technicians`);
  }

  create (technician: technician): Observable<technician>{
    return this.http.post<technician>(`${API_CONFIG.baseUrl}/technicians`, technician);
  }

  update(techinician: technician): Observable<technician>{
    return this.http.put<technician>(`${API_CONFIG.baseUrl}/technicians/${techinician.id}`, techinician);
  }
}
