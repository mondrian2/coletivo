import { Component, OnInit } from '@angular/core';
import { OnibusService } from 'src/app/services/onibus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.sass']
})
export class OnibusComponent implements OnInit {

  onibus: any;
  msg: string;

  constructor( private serv: OnibusService, private route: Router ) { }

  setItinerario(id: number) {
    this.route.navigate(['/trajeto', id]);
  }

  mensagem(m: string) {
    this.msg = m;
  }

  ngOnInit() {
    this.serv.getBus().subscribe(
        o => this.onibus = o,
        e => this.mensagem('Serviço fora do ar'),
        () => console.log('completo')
      );
  }

}
