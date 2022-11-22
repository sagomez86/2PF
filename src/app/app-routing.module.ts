import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';



const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  { path: 'cursos', component: InicioCursosComponent, children: [
    { path: 'lista', component: ListaCursosComponent },
    { path: 'editar', component: EditarCursosComponent },
    { path: 'agregar', component: AgregarCursosComponent },
    { path: ':id', component: DetalleCursosComponent }
  ]},
  { path: 'estudiantes', component: InicioEstudiantesComponent, children: [
    { path: 'lista', component: ListaEstudiantesComponent },
    { path: 'editar', component: EditarEstudiantesComponent },
    { path: 'agregar', component: AgregarEstudiantesComponent },
    { path: ':id', component: DetalleEstudiantesComponent}
  ]},
  { path: 'usuarios', component: InicioUsuariosComponent, children: [
    { path: 'lista', component: ListaUsuariosComponent },
    { path: 'editar', component: EditarUsuariosComponent },
    { path: 'agregar', component: AgregarUsuariosComponent },
    { path: ':id', component: DetalleUsuariosComponent}
  ]},
  { path: 'inscripciones', component: InicioInscripcionComponent, children: [
    { path: 'lista', component: ListarInscripcionComponent },
    { path: 'editar', component: EditarInscripcionComponent },
    { path: 'agregar', component: AgregarInscripcionComponent },
    { path: 'detalle', component: DetalleInscripcionesComponent }
  ]},
  {path:'**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
