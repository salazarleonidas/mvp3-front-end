import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Processo } from 'src/app/models/processo.model';
import { ProcessosService } from 'src/app/services/processos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  title = 'Listar Processos';

  displayedColumns: string[] = ['numeroProcesso', 'data', 'cpf', 'actions'];
  processos: Array<Processo> = [];
  
  constructor(
    private router: Router,
    private procService: ProcessosService
  ){}

  ngOnInit(): void {
    // var proc = new Processo();
    // proc.numeroRegistro = '12345644';
    // proc.cpf = '12345678909'

    // this.processos.push(proc);

    this.procService.getAll().subscribe(
      processos => this.processos = processos
    )
  }

  cadastrar(){
    this.router.navigate(['/processos/cadastrar'])
  }
  
  ver(numeroProcesso: string){
    // this.router.navigate(['/processos/editar'])
  }

  editar(numeroProcesso: string){
    this.router.navigate(['/processos/editar'])
  }

  apagar(numeroProcesso: string){
    this.processos = this.processos.filter(p => p.numeroRegistro !== numeroProcesso);
    this.procService.delete(numeroProcesso).subscribe();
  }

}
