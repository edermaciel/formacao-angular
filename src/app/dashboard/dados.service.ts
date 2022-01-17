import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 50],
    ['Fevereiro', 50],
    ['Março', 50],
    ['Abril', 60],
    ['Maio', 80],
    ['Junho', 27],
  ]

  constructor() { }

  obterDados(): Observable<any>{
    return new Observable(observable =>{
      observable.next(this.dados);
      observable.complete();
    })
  }
}
