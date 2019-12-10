import { Component, OnInit } from '@angular/core';
import { OnibusService } from 'src/app/services/onibus.service';

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.sass']
})
export class OnibusComponent implements OnInit {

  onibus: any

  constructor( private serv: OnibusService) { }

  ngOnInit() {
    this.serv.getBus().subscribe(
        o => this.onibus = o,
        e => console.log(e),
        ()=> console.log("completo")
      );
  }

}
