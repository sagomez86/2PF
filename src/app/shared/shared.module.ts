import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { CreacionUsuarioPipe } from './pipes/creacion-usuario.pipe';



@NgModule({
  declarations: [
    NombreApellidoPipe,
    CreacionUsuarioPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NombreApellidoPipe,
    CreacionUsuarioPipe
  ]
})
export class SharedModule { }
