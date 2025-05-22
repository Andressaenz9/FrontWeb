import { Component } from '@angular/core';
import { ContratosArrendadorComponent } from "../contratos-arrendador/contratos-arrendador.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal-arrendador',
  templateUrl: './principal-arrendador.component.html',
  styleUrl: './principal-arrendador.component.css',
  standalone : true,
  imports: [CommonModule, ContratosArrendadorComponent]
})
export class PrincipalArrendadorComponent  {

}