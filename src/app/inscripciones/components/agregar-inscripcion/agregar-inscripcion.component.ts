import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/cursos/models/curso';
import { AbmCursoService } from 'src/app/cursos/services/abm-curso.service';
import { Estudiante } from 'src/app/estudiantes/models/estudiante';
import { AbmEstudianteService } from 'src/app/estudiantes/services/abm-estudiante.service';
import { AbmInscripcionService } from '../../services/abm-inscripcion.service';

@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.css']
})
export class AgregarInscripcionComponent implements OnInit {

  selected = 'option2';
  cursos$!: Observable<Curso[]>;
  estudiantes$!: Observable<Estudiante[]>;

  formulario = this.fb.group({
    id: [,[Validators.required]],
    id_estudiante: [,[Validators.required]],
    id_curso: [,[Validators.required]],
    fechaInscripcion: [null,[Validators.required]],
    id_usuario: ['',[Validators.required]],
  })
   
  constructor(
    private fb: FormBuilder,
    private abmEstudiantesService: AbmEstudianteService,
    private abmCursoService: AbmCursoService,
    private abmInscripcionService: AbmInscripcionService,
    private router: Router
    ) { 

      this.estudiantes$ = this.abmEstudiantesService.obtenerEstudiantes();
    }
  
  
  ngOnInit(): void {
    this.cursos$ = this.abmCursoService.obtenerCursos();
    this.estudiantes$ = this.abmEstudiantesService.obtenerEstudiantes();
  }
  selectedEstudent!: string;
  selectedCurso!: string;

   incribirEstudiante() {
    let inscripcion : any = {
      id: Math.round(Math.random()*1000),
      id_estudiante : this.formulario.value.id_estudiante,
      id_curso : this.formulario.value.id_curso,
      fechaInscripcion : new Date().toLocaleString(),
      id_usuario : this.formulario.value.id_usuario
    };
      console.log(inscripcion)
     // this.abmInscripcionService.agregarInscripcion(inscripcion);
      this.router.navigate(['inscripciones']);
    }
    }
