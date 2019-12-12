import { Component, OnInit } from '@angular/core';
import { TrajetoService } from 'src/app/services/trajeto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trajeto',
  templateUrl: './trajeto.component.html',
  styleUrls: ['./trajeto.component.sass']
})
export class TrajetoComponent implements OnInit {

  trajeto: any;
  trajetoFinal = [];
  param: any;
  linhaId: string;
  linhaCod: string;
  linhaNome: string;
  msg: string;
  loading: boolean;

  constructor(
    private serv: TrajetoService,
    private activeroute: ActivatedRoute,
    private route: Router
  ) { }

  home() {
    this.route.navigate(['/home']);
  }

  mensagem(m: string) {
    this.msg = m;
  }

  getTrajetoFinal(t: any) {
    // mapeia o array
    this.trajeto = Object.keys(t).map(key => ({ type: key, value: t[key] }));
    // remove os 3 últimos itens do retorno que não fazem referências às coordenadas de latitude e longitude
    for (let i = 0; i < this.trajeto.length; i++) {
      if (i < (this.trajeto.length - 3)) {
        this.trajeto[i].type = parseInt(this.trajeto[i].type, 10);
        this.trajetoFinal.push(this.trajeto[i]);
      }
    }
    return this.trajetoFinal;
  }

  getLinha(t: any) {
    this.linhaCod = t.codigo;
    this.linhaId = t.idlinha;
    this.linhaNome = t.nome;
  }

  ngOnInit() {
    this.loading = true;
    // captura o parâmetro da url com código da linha de ônibus
    this.activeroute.paramMap.subscribe(p => {
      this.param = p;
      // solicita o trajeto passando o código da linha de ônibus
      this.serv.getTrajeto(this.param.params.id)
        .subscribe(t => {
          this.trajeto = t;
          this.loading = false;
          // setar identificação da linha
          this.getLinha(this.trajeto);
          // trata o trajeto final
          this.getTrajetoFinal(this.trajeto);
        },
        e => this.mensagem('Serviço fora do ar')
        );
      }
    );
  }

}
