import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcessosService } from 'src/app/services/processos.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit{
  
  constructor(
    private router: Router,
    private service: ProcessosService){

  }

  ngOnInit(): void {

  }

}
