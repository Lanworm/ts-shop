import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  public getClients(): Observable<Client[]> {
    // return this.http.get<Client[]>('../../assets/clients.json').pipe(delay(1000));
    return this.http.get<Client[]>('/api/clients');
  }

  public addClient(client: Client): Observable<any> {
    return this.http.post('/api/clients', client);
  }

}
