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
    
  ) { }

  ngOnInit(): void {
    
  }
 

}
