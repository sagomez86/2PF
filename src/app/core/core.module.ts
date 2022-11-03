import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Textoa20pxDirective } from './directives/textoa20px.directive';
import { HomeComponent } from './home/home.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ToolbarComponent,
    NavbarComponent,
    Textoa20pxDirective,
    HomeComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ],
  exports:[
    ToolbarComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
