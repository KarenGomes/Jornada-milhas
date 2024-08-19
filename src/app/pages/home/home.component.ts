import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Depoimentos, Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  listaPromocoes!: Promocao[];
  depoimentos: Depoimentos[] = [];
  constructor(private servicePromocao: PromocaoService, private depoimentosService: DepoimentoService){}

  ngOnInit(): void {
      this.servicePromocao.listar().subscribe(resposta => this.listaPromocoes = resposta);
      this.depoimentosService.listar().subscribe(resp => this.depoimentos = resp);
  }
}
