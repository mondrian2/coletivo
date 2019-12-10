import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnibusService {

  constructor( private http: HttpClient) { }

  getBus () {
    return this.http.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o')
  }
}
