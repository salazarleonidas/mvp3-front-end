import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Processo } from 'src/app/models/processo.model';
import { ProcessosService } from 'src/app/services/processos.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  numeroRegistro!: string;
  
  processoForm = new FormGroup({
    numeroRegistro: new FormControl({value: '', disabled: true}),
    data: new FormControl('', Validators.required),
    uf: new FormControl('', Validators.required)
  });
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProcessosService){

  }

  ngOnInit(): void {
    this.numeroRegistro = this.route.snapshot.params['numeroRegistro'];

    if(this.numeroRegistro){
      this.service.get(this.numeroRegistro)
        .pipe(first())
        .subscribe(x =>{
          this.processoForm.setValue({
              numeroRegistro: '',
              uf: '',
              data: `${x.data.getDay()}/${x.data.getMonth()}/${x.data.getFullYear()}`
          });
        });
    }
  }

  onSubmit(){
    if(this.processoForm.valid){
      let processo = new Processo();

      processo.numeroRegistro = this.processoForm.controls.numeroRegistro.value ?? '';
      processo.data = this.convertToLocalDate(this.processoForm.controls.data.value ?? '') ?? new Date();
      processo.numeroRegistro = this.processoForm.controls.numeroRegistro.value ?? '';

      this.service.update(processo).subscribe();

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
