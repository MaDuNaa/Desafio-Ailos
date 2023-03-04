import { Component , Input} from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-mostrar-cpf',
  templateUrl: './mostrar-cpf.component.html',
  styleUrls: ['./mostrar-cpf.component.css']
})
export class MostrarCPFComponent {

  @Input() cliente?: Cliente;

}
