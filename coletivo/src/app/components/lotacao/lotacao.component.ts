import { Component, OnInit } from '@angular/core';
import { LotacaoService } from 'src/app/services/lotacao.service';

@Component({
  selector: 'app-lotacao',
  templateUrl: './lotacao.component.html',
  styleUrls: ['./lotacao.component.sass']
})
export class LotacaoComponent implements OnInit {
  lotacoes: any;
  msg: string;

  constructor(private serv: LotacaoService) { }

  mensagem(m: string) {
    this.msg = m;
  }

  ngOnInit() {
    this.serv.getLotacao().subscribe(
      l => this.lotacoes = l,
      e => this.mensagem('Serviço fora do ar'),
      () => console.log('get lotacao completo')
    );
  }

}
