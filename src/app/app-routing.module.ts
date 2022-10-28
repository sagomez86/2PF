import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PaginaNoEncontradaComponent } from './core/pagina-no-encontrada/pagina-no-encontrada.component';
import { AgregarCursosComponent } from './cursos/components/agregar-cursos/agregar-cursos.component';
import { EditarCursosComponent } from './cursos/components/editar-cursos/editar-cursos.component';
import { InicioCursosComponent } from './cursos/components/inicio-cursos/inicio-cursos.component';
import { ListaCursosComponent } from './cursos/components/lista-cursos/lista-cursos.component';
import { AgregarEstudiantesComponent } from './estudiantes/components/agregar-estudiantes/agregar-estudiantes.component';
import { EditarEstudiantesComponent } from './estudiantes/components/editar-estudiantes/editar-estudiantes.component';
import { InicioEstudiantesComponent } from './estudiantes/components/inicio-estudiantes/inicio-estudiantes.component';
import { ListaEstudiantesComponent } from './estudiantes/components/lista-estudiantes/lista-estudiantes.component';
import { AgregarUsuariosComponent } from './usuarios/components/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/components/editar-usuarios/editar-usuarios.component';
import { InicioUsuariosComponent } from './usuarios/components/inicio-usuarios/inicio-usuarios.component';
import { ListaUsuariosComponent } from './usuarios/components/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  { path: 'cursos', component: InicioCursosComponent, children: [
    { path: 'lista', component: ListaCursosComponent },
    { path: 'editar', component: EditarCursosComponent },
    { path: 'agregar', component: AgregarCursosComponent }
  ]},
  { path: 'estudiantes', component: InicioEstudiantesComponent, children: [
    { path: 'lista', component: ListaEstudiantesComponent },
    { path: 'editar', component: EditarEstudiantesComponent },
    { path: 'agregar', component: AgregarEstudiantesComponent }
  ]},
  { path: 'usuarios', component: InicioUsuariosComponent, children: [
    { path: 'lista', component: ListaUsuariosComponent },
    { path: 'editar', component: EditarUsuariosComponent },
    { path: 'agregar', component: AgregarUsuariosComponent }
  ]},
  {path:'**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
