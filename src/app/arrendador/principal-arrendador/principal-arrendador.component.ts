import { Component } from '@angular/core';
import { ContratosArrendadorComponent } from "../contratos-arrendador/contratos-arrendador.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // <-- AÑADIR ESTO

@Component({
  selector: 'app-principal-arrendador',
  templateUrl: './principal-arrendador.component.html',
  styleUrl: './principal-arrendador.component.css',
  standalone : true,
  imports: [
    CommonModule,
    HttpClientModule,
    ContratosArrendadorComponent
  ]
})
export class PrincipalArrendadorComponent  {}
