import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CepService } from './cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cep = new FormGroup({
    cep: new FormControl(''),
    endereço: new FormControl(''),
    numero: new FormControl(''),
    bairro: new FormControl(''),
    cidade: new FormControl(''),
    estado: new FormControl(''),
    complemento: new FormControl(''),
  });
  title = 'consulta-cep';
  resp: any;

  constructor(
    private cepService: CepService
  ) { }

  ngOnInit() { }

  getcep() {
    this.cepService.getadress(this.cep.value.cep).subscribe((result) => {
      this.fillAddress(result)
    },
      error => {
        console.log('error', error);
        this.resp = error.error.message;
        console.log(error.error.message);
      }
    );
  }

  fillAddress(result: any) {
    this.cep.patchValue({
      endereço: result.address,
      numero: result.ddd,
      bairro: result.district,
      cidade: result.city,
      estado: result.state,
      complemento: result.address_type,
    });
  }
}