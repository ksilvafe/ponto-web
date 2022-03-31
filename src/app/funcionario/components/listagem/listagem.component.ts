import { Component, OnInit } from '@angular/core';
import { Lancamento, LancamentoService } from 'src/app/shared';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao',];


  constructor(
    private lancamentoService: LancamentoService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.lancamentoService.listarTodosLancamentos()
      .subscribe(
        data => {
          const lancamentos = data['data'] as Lancamento[];
          this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
        },
        err => {
          const msg: string = "Erro obtendo lançamentos.";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

}

