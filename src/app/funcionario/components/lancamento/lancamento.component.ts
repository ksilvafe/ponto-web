import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Tipo } from 'src/app/shared';

declare var navigate: any;

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  private dataAtualEn: string;
  dataAtual: string;
  geoLocation: string;
  ultimoTipoLancado: string;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.dataAtual = moment().format('DD/MM/YYYY');
    this.dataAtualEn = moment().format('YYYY-MM-DD');
    this.obterGeoLocation();
    this.ultimoTipoLancado = '';
    this.obterUltimoTipoLancado();
  }

  obterGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.geoLocation = position.coords.latitude + ',' + position.coords.longitude;
      });
    }
    return '';
  }

  iniciarTrabalho(){
    this.cadastrar(Tipo.INICIO_TRABALHO);
  }

  inciarAlmoco() {
    this.cadastrar(Tipo.INICIO_ALMOCO);
  }

  terminarAlmoco() {
    this.cadastrar(Tipo.TERMINO_ALMOCO);
  }

  terminarTrabalho() {
    this.cadastrar(Tipo.TERMINO_TRABALHO);
  }

  obterUltimoTipoLancado() {
    this.ultimoTipoLancado = '';
  }

  cadastrar(tipo: Tipo) {
    alert(`Tipo: ${tipo}), this.dataAtualEn: $(this.dataAtualEn),
      geolocation: $(this.geoLocation`);
  }

  obterUrlMapa() {
    return `https://www.google.com/maps/search/?api=1&query=${this.geoLocation}`;
    // "https://www.google.com/maps/search/?api=1&query=" + this.geoLocation
  } 

  exibirInicioTrabalho(): boolean {
    return this.ultimoTipoLancado == '' || this.ultimoTipoLancado == Tipo.TERMINO_TRABALHO;
  }

  exibirTerminoTrabalho(): boolean {
    return this.ultimoTipoLancado == Tipo.INICIO_TRABALHO || this.ultimoTipoLancado == Tipo.TERMINO_ALMOCO;
  }

  exibirInicioAlmoco(): boolean {
    return this.ultimoTipoLancado == Tipo.INICIO_TRABALHO;
  }

  exibirTerminoAlmoco(): boolean {
    return this.ultimoTipoLancado == Tipo.INICIO_ALMOCO;
  }
}
