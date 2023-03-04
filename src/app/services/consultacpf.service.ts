import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ConsultacpfService {

  cliente: Cliente[];

  constructor() {

    this.cliente = [
      {cpf: '14362490230', nome: 'Joao da Silva', situacao: 'regular'},
      {cpf: '77486765691', nome: 'Mariana de Souza Oliveira', situacao: 'regular'},
      {cpf: '15152187914', nome: 'Ana Julia Silva', situacao: 'regular'}
    ];
    
   }

   clienteBusca(cpf: string): Cliente | undefined{
    for (let i = 0; i < this.cliente.length; i++){
      if (this.cliente.at(i)?.cpf == cpf){
        return this.cliente.at(i);
      }
    }
    return undefined;
   }

}
