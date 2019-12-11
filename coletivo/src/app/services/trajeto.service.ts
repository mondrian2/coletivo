import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrajetoService {

  constructor(private http: HttpClient) { }

  getOnibus() {
    return this.http.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o');
  }

  getTrajeto(id: number) {
    return this.http.get(`http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${id}`);
  }
}
