import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from '../../models/curso';
import { AbmCursoService } from '../../services/abm-curso.service';

@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styleUrls: ['./detalle-cursos.component.css']
})
export class DetalleCursosComponent implements OnInit {

  curso$!: Observable<Curso>;

  constructor(
    private activateRoute: ActivatedRoute,
    private cursoService: AbmCursoService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parseInt(parametros.get('id') || '0');

      this.curso$ = this.cursoService.obtenerCurso(id);
    })
  }

}