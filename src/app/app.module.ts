import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CursosModule } from './cursos/cursos.module';
import { CursosRoutingModule } from './cursos/cursos-routing.module';
import { SharedModule } from './shared/shared.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    EstudiantesModule,
    UsuariosModule,
    CursosModule,
    CursosRoutingModule,
    InscripcionesModule   
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
