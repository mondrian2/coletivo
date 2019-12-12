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
  loading: boolean;

  constructor( private serv: OnibusService, private route: Router ) { }

  setItinerario(id: number) {
    this.route.navigate(['/trajeto', id]);
  }

  getOninus() {
    return this.onibus;
  }

  home() {
    this.route.navigate(['/home']);
  }

  mensagem(m: string) {
    return this.msg = m;
  }

  ngOnInit() {
    this.loading = false;
    return this.serv.getBus().subscribe(
        o => {this.onibus = o; this.loading = false; },
        e => this.mensagem('Serviço fora do ar'),
        () => console.log('completo')
      );
  }

}
