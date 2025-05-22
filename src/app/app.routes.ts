import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './Landing-Page/pagina-principal/pagina-principal.component';
import { ContratosArrendadorComponent } from './arrendador/contratos-arrendador/contratos-arrendador.component';
import { CalificarArrendatarioComponent } from './arrendador/calificar-arrendatario/calificar-arrendatario.component';
import { PrincipalArrendadorComponent } from './arrendador/principal-arrendador/principal-arrendador.component';
import { CrearPropiedadComponent } from './arrendador/propiedades-arrendador/crear-propiedad/crear-propiedad.component';
import { DetallePropiedadComponent } from './arrendador/propiedades-arrendador/detalle-propiedad/detalle-propiedad.component';
import { EditarPropiedadComponent } from './arrendador/propiedades-arrendador/editar-propiedad/editar-propiedad.component';
import { PropiedadesArrendadorComponent } from './arrendador/propiedades-arrendador/propiedades-arrendador.component';

export const routes: Routes = [
    {path: '',
    component: PaginaPrincipalComponent
},
    { path: 'arrendador/contratos', component: ContratosArrendadorComponent },
    { path: 'arrendador', component: PrincipalArrendadorComponent },
    { path: 'arrendador/propiedades', component: PropiedadesArrendadorComponent },
    { path: 'arrendador/propiedades/crear-propiedad', component: CrearPropiedadComponent },
    { path: 'arrendador/propiedades/detalle-propiedad/:idPropiedad', component: DetallePropiedadComponent },
    { path: 'arrendador/propiedades/editar-propiedad/:idPropiedad', component: EditarPropiedadComponent },
    { path: 'arrendador/calificar', component: CalificarArrendatarioComponent },

];
