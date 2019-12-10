import { Component, OnInit } from '@angular/core';
import { LotacaoService } from 'src/app/services/lotacao.service';

@Component({
  selector: 'app-lotacao',
  templateUrl: './lotacao.component.html',
  styleUrls: ['./lotacao.component.sass']
})
export class LotacaoComponent implements OnInit {
  lotacoes: any
  constructor(private serv: LotacaoService) { }

  ngOnInit() {
    this.serv.getLotacao().subscribe(
      l => this.lotacoes = l,
      e => console.log(e),
      () => console.log('get lotacao completo')
    )
  }

}
