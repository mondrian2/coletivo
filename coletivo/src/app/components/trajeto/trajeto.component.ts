import { Component, OnInit } from '@angular/core';
import { TrajetoService } from 'src/app/services/trajeto.service';

@Component({
  selector: 'app-trajeto',
  templateUrl: './trajeto.component.html',
  styleUrls: ['./trajeto.component.sass']
})
export class TrajetoComponent implements OnInit {

  trajeto: any
  onibus: any

  constructor(private serv: TrajetoService) { }

  getTrajeto(id: number){
    this.serv.getTrajeto(id).subscribe(
      t => this.trajeto = t,
      e => console.log(e),
      () => console.log( "getOnibusTrajeto completo")
    )
  }

  ngOnInit() {
    this.serv.getOnibus().subscribe(
      o => this.onibus = o,
      e => console.log(e),
      () => console.log( "getOnibus completo")
    )
  }

}
