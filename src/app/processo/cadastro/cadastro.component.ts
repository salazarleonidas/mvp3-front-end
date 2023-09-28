import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  processoForm = new FormGroup({
    numeroRegistro: new FormControl('', Validators.required),
    data: new FormControl('', Validators.required),
    uf: new FormControl('', Validators.required)
  });

  ngOnInit(): void {

  }

  onSubmit(){

  }
}
