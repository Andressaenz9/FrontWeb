import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { WikiGroupComponent } from '../wiki-group/wiki-group.component';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    WikiGroupComponent
  ],
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {  // Implementa OnInit

  constructor() {}

  ngOnInit(): void {  // Método ngOnInit
    // Aquí puedes agregar lógica que necesites al inicializar el componente
  }
}