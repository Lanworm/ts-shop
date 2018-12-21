import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../clients/client.service';
import {Client} from '../clients/client.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  clientForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private clientService: ClientService,
              private router: Router) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      birthdate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    const client: Client = {
      name: this.clientForm.value.name,
      surname: this.clientForm.value.surname,
      email: this.clientForm.value.email,
      birthdate: this.clientForm.value.birthdate
    };
    this.clientService.addClient(client).subscribe(() => {
      this.router.navigate(['/clients']);
    }, () => {
    });
  }

}
