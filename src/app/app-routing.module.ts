import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PaginaNoEncontradaComponent } from './core/pagina-no-encontrada/pagina-no-encontrada.component';
import { AgregarCursosComponent } from './cursos/components/agregar-cursos/agregar-cursos.component';
import { DetalleCursosComponent } from './cursos/components/detalle-cursos/detalle-cursos.component';
import { EditarCursosComponent } from './cursos/components/editar-cursos/editar-cursos.component';
import { InicioCursosComponent } from './cursos/components/inicio-cursos/inicio-cursos.component';
import { ListaCursosComponent } from './cursos/components/lista-cursos/lista-cursos.component';
import { AgregarEstudiantesComponent } from './estudiantes/components/agregar-estudiantes/agregar-estudiantes.component';
import { DetalleEstudiantesComponent } from './estudiantes/components/detalle-estudiantes/detalle-estudiantes.component';
import { EditarEstudiantesComponent } from './estudiantes/components/editar-estudiantes/editar-estudiantes.component';
import { InicioEstudiantesComponent } from './estudiantes/components/inicio-estudiantes/inicio-estudiantes.component';
import { ListaEstudiantesComponent } from './estudiantes/components/lista-estudiantes/lista-estudiantes.component';
import { AgregarInscripcionComponent } from './inscripciones/components/agregar-inscripcion/agregar-inscripcion.component';
import { DetalleInscripcionesComponent } from './inscripciones/components/detalle-inscripciones/detalle-inscripciones.component';
import { EditarInscripcionComponent } from './inscripciones/components/editar-inscripcion/editar-inscripcion.component';
import { InicioInscripcionComponent } from './inscripciones/components/inicio-inscripcion/inicio-inscripcion.component';
import { ListarInscripcionComponent } from './inscripciones/components/listar-inscripcion/listar-inscripcion.component';
import { AgregarUsuariosComponent } from './usuarios/components/agregar-usuarios/agregar-usuarios.component';
import { DetalleUsuariosComponent } from './usuarios/components/detalle-usuarios/detalle-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/components/editar-usuarios/editar-usuarios.component';
import { InicioUsuariosComponent } from './usuarios/components/inicio-usuarios/inicio-usuarios.component';
import { ListaUsuariosComponent } from './usuarios/components/lista-usuarios/lista-usuarios.component';

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
    { path: 'detalle', component: DetalleInscripcionesComponent },
    { path: ':id', component: DetalleInscripcionesComponent}
  ]},
  {path:'**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
