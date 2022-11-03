import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Estudiante } from '../../models/estudiante';
import { AbmEstudianteService } from '../../services/abm-estudiante.service';

@Component({
  selector: 'app-detalle-estudiantes',
  templateUrl: './detalle-estudiantes.component.html',
  styleUrls: ['./detalle-estudiantes.component.css']
})
export class DetalleEstudiantesComponent implements OnInit {

  estudiante$!: Observable<Estudiante[]>;

  constructor(
    private activateRoute: ActivatedRoute,
    private estudianteService: AbmEstudianteService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parseInt(parametros.get('id') || '0');

      this.estudiante$ = this.estudianteService.obtenerEstudiante(id);
    })
  }

}