import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { Curso } from 'src/app/cursos/models/curso';
import { Estudiante } from 'src/app/estudiantes/models/estudiante';
import { Inscripcion } from '../models/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class AbmInscripcionService {

  private inscripcionesSubject: BehaviorSubject<Inscripcion[]>;

  inscripciones: Inscripcion[] = [
    {
      id: 1,
      id_estudiantes: [11,12,13],
      id_curso: 1,
      fechaInscripcion: new Date(),
      id_usuario: 1
    },
    {
      id: 2,
      id_estudiantes: [21,22,23],
      id_curso: 2,
      fechaInscripcion: new Date(),
      id_usuario: 1
    },
    {
      id: 3,
      id_estudiantes: [31,32,33],
      id_curso: 3,
      fechaInscripcion: new Date(),
      id_usuario: 1
    }
  ];
  


  constructor() {
    this.inscripcionesSubject = new BehaviorSubject<Inscripcion[]>(this.inscripciones) 
   }


  obtenerInscripciones(): Observable<Inscripcion[]>{
    return this.inscripcionesSubject.asObservable()
  }

  obtenerEstudiantesCurso(curso: Curso) : Observable<Inscripcion[]>{
    return this.obtenerInscripciones().pipe(
      map((ins: Inscripcion[]) => ins.filter((ins: Inscripcion) => ins.id_curso === curso.id)));
  }

}
