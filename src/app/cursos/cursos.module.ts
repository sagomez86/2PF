import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { EditarCursosComponent } from './components/editar-cursos/editar-cursos.component';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { MaterialModule } from '../material.module';
import { InicioCursosComponent } from './components/inicio-cursos/inicio-cursos.component';
import { AbmCursoService } from './services/abm-curso.service';


@NgModule({
  declarations: [
    InicioCursosComponent,
    ListaCursosComponent,
    EditarCursosComponent,
    AgregarCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule
  ],
  providers:[
    AbmCursoService
  ]
})
export class CursosModule { }
