import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Call } from '../models/call';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Call[]>{
    return this.http.get<Call[]>(`${API_CONFIG.baseUrl}/calls`);
  }
}
