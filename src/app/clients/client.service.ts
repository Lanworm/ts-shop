import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('../../assets/clients.json');
  }

}
