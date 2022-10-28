import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { AgregarUsuariosComponent } from './components/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './components/editar-usuarios/editar-usuarios.component';
import { InicioUsuariosComponent } from './components/inicio-usuarios/inicio-usuarios.component';
import { MaterialModule } from '../material.module';
import { AbmUsuarioService } from './services/abm-usuario.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    AgregarUsuariosComponent,
    EditarUsuariosComponent,
    InicioUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[
    AbmUsuarioService
  ]
})
export class UsuariosModule { }
