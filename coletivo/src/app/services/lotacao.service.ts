import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LotacaoService {

  constructor(private http: HttpClient) { }

  getLotacao () {
    return this.http.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l')
  }
}
