import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/cursos/models/curso';
import { AbmEstudianteService } from 'src/app/estudiantes/services/abm-estudiante.service';
import { Inscripcion } from '../../models/inscripcion';
import { AbmInscripcionService } from '../../services/abm-inscripcion.service';

@Component({
  selector: 'app-inicio-inscripcion',
  templateUrl: './inicio-inscripcion.component.html',
  styleUrls: ['./inicio-inscripcion.component.css']
})
export class InicioInscripcionComponent implements OnInit {

  constructor(
    private inscripcionService: AbmInscripcionService,
    private estudianteService: AbmEstudianteService
  ) { }

  ngOnInit(): void {
    this.inscripcion$ = this.inscripcionService.obtenerEstudiantesCurso(this.cursoPrueba)
    console.log(this.inscripcion$)
  }

  cursoPrueba : Curso = {
    id: 2,
    nombre: 'algo',
    cantidad_horas: 0,
    cantidad_clases: 0,
    profesor: ''
  }
  inscripcion$! : Observable<Inscripcion[]>

  

}
