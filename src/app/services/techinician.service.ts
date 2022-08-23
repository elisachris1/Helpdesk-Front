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

  findAll(): Observable<technician[]> {
    return this.http.get<technician[]>(`${API_CONFIG.baseUrl}/technicians`);
  }

  create (technician: technician): Observable<technician>{
    return this.http.post<technician>(`${API_CONFIG.baseUrl}/technicians`, technician);
  }
}
