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
  
  // pagina?:number;
  verCpfValidado: boolean = false;

  cpf: string = '';

  error: string = '';

  cliente?: Cliente | null;

  constructor(private consultaCpf: ConsultacpfService) { }

  ngOnInit(): void {
      
  }

 consultarCpfCliente(){
  if (this.cpf.length < 14) {
    this.error = 'CPF esta invalido.'
    
    return
  }
  const formatacaoCpf = this.formataCpf(this.cpf);
  
  if (this.consultandoCpf(formatacaoCpf)){
    this.cliente = this.consultaCpf.clienteBusca(formatacaoCpf);
   
    if (!this.cliente) {
      this.error = 'CPF não encontrado.'
      
    } else {
      this.verCpfValidado = true;
      this.error = '';
    }
    return;
  }
  this.error = 'CPF esta invalido.';
}

 formataCpf(cpfpontuacao: string): string {
    let formatacaoCpf = '';

    for(let i = 0; i < 14; i++){
      if (i == 3 || i == 7 || i == 11 ) {
        continue;
      }
      formatacaoCpf += cpfpontuacao.charAt(i);

    }
    return formatacaoCpf;
 }

 input() {
   if (this.cpf.length == 3 || this.cpf.length == 7){
    this.cpf += '.';
   } else if (this.cpf.length == 11) {
    this.cpf += '-';
   }
 }

 consultandoCpf(cpf: string): boolean{
  let somando;
  let restante;
  somando = 0;
  if(cpf == "00000000000") return false;

  for (let i=1; i<=9; i++) somando = somando + parseInt(cpf.substring(i-1, i)) * (11 - i);
  restante = (somando * 10) % 11;

  if((restante ==10) || (restante ==11)) restante = 0;
  if(restante != parseInt(cpf.substring(9, 10)) ) return false;

  somando = 0;
 for (let i = 1; i <= 10; i++) somando = somando + parseInt(cpf.substring(i-1, i)) * (12 - i);
 restante = (somando * 10) % 11;

 if((restante == 10) || (restante == 11))  restante = 0;
 if(restante != parseInt(cpf.substring(10, 11) ) ) return false;

 return true;

  }

}





