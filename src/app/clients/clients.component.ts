import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  private _clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  private getClients(): void {
    this.clientService.getClients().subscribe(
      (clients: Client[]) => {
        this._clients = clients;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  get clients(): Client[] {
    return this._clients;
  }

}
