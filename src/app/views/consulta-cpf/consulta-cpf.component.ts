import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ConsultacpfService } from 'src/app/services/consultacpf.service';


@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.css']
})
export class ConsultaCpfComponent implements OnInit{
  
  pagina?:number;
  isCpfValido: boolean = false;
  cpf: string = '';
  mensagemErro: string = '';
  cliente?: Cliente | null;

  constructor(private consultaCpf: ConsultacpfService) { }

  ngOnInit(): void {
      
  }

 onConsultar() {
  if(this.cpf.length < 14) {
    this.mensagemErro = 'CPF esta invalido.'
    return
  }
  const cpfSemPontos = this.removePontos(this.cpf);

  if(this.validaCpf(cpfSemPontos)){
    this.cliente = this.consultaCpf.clienteBusca(cpfSemPontos);
    if(!this.cliente) {
      this.mensagemErro = 'CPF não encontrado.'
    } else {
      this.isCpfValido = true;
      this.mensagemErro = '';
    }
    return;
  }
  this.mensagemErro = 'CPF esta invalido.';

 }

 removePontos(cpfComPontos: string): string {
    let cpfSemPontos = '';

    for(let i = 0; i < 14; i++){
      if(i == 3 || i == 7 || i == 11 ) {
        continue;
      }
      cpfSemPontos += cpfComPontos.charAt(i);

    }
    return cpfSemPontos;
 }

 formataInput() {
   if (this.cpf.length == 3 || this.cpf.length == 7){
    this.cpf += '.';
   } else if (this.cpf.length == 11) {
    this.cpf += '-';
   }
 }

 validaCpf(cpf: string): boolean {
  let Soma;
  let Resto;
  Soma = 0;
  if(cpf == "00000000000") return false;

  for (let i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if((Resto ==10) || (Resto ==11)) Resto = 0;
  if(Resto != parseInt(cpf.substring(9.10)) ) return false;

 Soma = 0;

for (let i = 1; i <- 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
Resto = (Soma * 10) % 11;

if((Resto == 10) || (Resto == 11))  Resto = 0;
if(Resto != parseInt(cpf.substring(10, 11) ) ) return false;

return true;

  }
}





