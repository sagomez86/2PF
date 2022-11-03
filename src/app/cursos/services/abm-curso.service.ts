import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class AbmCursoService {

  private cursos: Curso[] = [
    {
    id: 1,
    nombre: 'Angular',
    cantidad_horas: 10,
    cantidad_clases: 5,
    profesor: 'Abner'
    },
    {
      id: 2,
      nombre: 'Python',
      cantidad_horas: 20,
      cantidad_clases: 10,
      profesor: 'Franco'
      },
      {
        id: 3,
        nombre: 'REactJS',
        cantidad_horas: 30,
        cantidad_clases: 15,
        profesor: 'Lautaro'
        },
  ];

  private cursosSubject: BehaviorSubject<Curso[]>;

  constructor() { 
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
  }

///////////////////////////////  
// Metodos ABM de Curso //
/////////////////////////////// 

// Obtener Lista de cursos
obtenerCursos(): Observable<Curso[]>{
  return this.cursosSubject.asObservable();
}

// Obtener un curso
obtenerCurso(id: number): Observable<Curso[]>{
  return this.obtenerCursos().pipe(
    map((cursos: Curso[]) => cursos.filter((e: Curso) => e.id === id))
  )
}

// Agregar curso
agregarCurso(curso: Curso){
  this.cursos.push(curso);
  this.cursosSubject.next(this.cursos);
}

// Borrar curso
eliminarCurso(id: number){
  let indice = this.cursos.findIndex((e: Curso) => e.id === id);
  if(indice > -1){
    this.cursos.splice(indice, 1);
  }
  this.cursosSubject.next(this.cursos);
}

// Editar curso
editarCurso(curso: Curso){
  let indice = this.cursos.findIndex((e: Curso) => e.id === curso.id);
  if(indice > -1){
    this.cursos[indice] = curso;
  }
  this.cursosSubject.next(this.cursos);
}

}
