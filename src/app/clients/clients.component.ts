import {Component, OnInit, ViewChild} from '@angular/core';
import { Client } from './client.model';
import { ClientService } from './client.service';
import {ClientDetailsComponent} from '../client-details/client-details.component';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  private _clients: Client[];
  private _isLoading: boolean = false;

  dataSource: MatTableDataSource<Client>;

  displayedColumns: string[] = ['name', 'surname', 'birthdate', 'email'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clientService: ClientService,
              private dialog: MatDialog,
              private router: Router) { }

  get isLoading(): boolean {
    return this._isLoading;
  }

  ngOnInit() {
    this.getClients();
  }

  private getClients(): void {
    this._isLoading = true;
    this.clientService.getClients().subscribe(
      (clients: Client[]) => {
        this._clients = clients;
        this.dataSource = new MatTableDataSource(this._clients);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this._isLoading = false;
      },
      (error) => {
        console.log(error);
        this._isLoading = false;
      }
    );
  }

  get clients(): Client[] {
    return this._clients;
  }

  public showClientDetails(client: Client): void {
    const dialogRef = this.dialog.open(ClientDetailsComponent, {
      data: client,
      height: '500px',
      width: '600px',
    });
  }

  public onAddClient(): void {
    this.router.navigate(['/add-client']);
  }

}
