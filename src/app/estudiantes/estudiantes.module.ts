import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { InicioEstudiantesComponent } from './components/inicio-estudiantes/inicio-estudiantes.component';
import { EditarEstudiantesComponent } from './components/editar-estudiantes/editar-estudiantes.component';
import { AgregarEstudiantesComponent } from './components/agregar-estudiantes/agregar-estudiantes.component';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { NombreApellidoPipe } from '../shared/pipes/nombre-apellido.pipe';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { AbmEstudianteService } from './services/abm-estudiante.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InicioEstudiantesComponent,
    EditarEstudiantesComponent,
    AgregarEstudiantesComponent,
    ListaEstudiantesComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers:[
    AbmEstudianteService
  ]
  
})
export class EstudiantesModule { }
