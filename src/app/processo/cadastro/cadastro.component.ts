import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Processo } from 'src/app/models/processo.model';
import { ProcessosService } from 'src/app/services/processos.service';

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
  constructor(
    private router: Router,
    private service: ProcessosService){

  }

  ngOnInit(): void {

  }

  onSubmit(){
    if(this.processoForm.valid){
      let processo = new Processo();

      processo.numeroRegistro = this.processoForm.controls.numeroRegistro.value ?? '';
      processo.data = this.convertToLocalDate(this.processoForm.controls.data.value ?? '') ?? new Date();
      processo.numeroRegistro = this.processoForm.controls.numeroRegistro.value ?? '';

      this.service.create(processo).subscribe();

      this.router.navigate(['/processos']);
    }
  }

  convertToLocalDate(responseDate: string) : Date {
    try {
        if (responseDate != null) {
          var dateParts = responseDate.split('/');
          const newDate = new Date(Number(dateParts[2]), Number(dateParts[1]), Number(dateParts[0]), 0, 0, 0);
          return newDate;
        } else {
            return  new Date(1900, 1, 1, 0, 0, 0);
        }
    } catch (error) {
      return  new Date(1900, 1, 1, 0, 0, 0);
    }
  }
}
