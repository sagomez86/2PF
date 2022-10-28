import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante';

@Injectable()
export class AbmEstudianteService {

  private estudiantes: Estudiante[] = [
    {
    id: 1,
    nombre: 'Santiago',
    apellido: 'Gomez',
    edad: 35,
    curso: 'Angular'
    },
    {
      id: 2,
      nombre: 'Julia',
      apellido: 'Hernandez',
      edad: 35,
      curso: 'ReactJS'
      },
      {
        id: 3,
        nombre: 'Diego',
        apellido: 'Rodriguez',
        edad: 34,
        curso: 'Python'
        }
  ];

  private estudiantesSubject: BehaviorSubject<Estudiante[]>;

  constructor() { 
    this.estudiantesSubject = new BehaviorSubject<Estudiante[]>(this.estudiantes);
  }

///////////////////////////////  
// Metodos ABM de Estudiante //
/////////////////////////////// 

// Obtener Lista de Estudiantes
obtenerEstudiantes(): Observable<Estudiante[]>{
  return this.estudiantesSubject.asObservable();
}

// Obtener un Estudiante
obtenerEstudiante(id: number): Observable<Estudiante[]>{
  return this.obtenerEstudiantes().pipe(
    map((estudiantes: Estudiante[]) => estudiantes.filter((e: Estudiante) => e.id === id))
  )
}

// Agregar Estudiante
agregarEstudiante(estudiante: Estudiante){
  this.estudiantes.push(estudiante);
  this.estudiantesSubject.next(this.estudiantes);
}

// Borrar Estudiante
eliminarEstudiante(id: number){
  let indice = this.estudiantes.findIndex((e: Estudiante) => e.id === id);
  if(indice > -1){
    this.estudiantes.splice(indice, 1);
  }
  this.estudiantesSubject.next(this.estudiantes);
}

// Editar Estudiante
editarEstudiante(estudiante: Estudiante){
  let indice = this.estudiantes.findIndex((e: Estudiante) => e.id === estudiante.id);
  if(indice > -1){
    this.estudiantes[indice] = estudiante;
  }
  this.estudiantesSubject.next(this.estudiantes);
}

}
