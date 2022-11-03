import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CreacionUsuarioPipe } from 'src/app/shared/pipes/creacion-usuario.pipe';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AbmUsuarioService {

  private usuarios: Usuario[] = [
    {
    id: 1,
    nombre: 'Santiago',
    apellido: 'Gomez',
    usuario: 'sgomez',
    correo: 'sgomez@localhost',
    contraseña: '12345'
    },
    {
    id: 2,
    nombre: 'Julia',
    apellido: 'Hernandez',
    usuario: 'jhernandez',
    correo: 'jhernandez@localhost',
    contraseña: '12345'
    },
    {
    id: 3,
    nombre: 'Diego',
    apellido: 'Rodriguez',
    usuario: 'drodriguez',
    correo: 'drodriguez@localhost',
    contraseña: '12345'
    }
  ];

  private usuariosSubject: BehaviorSubject<Usuario[]>;

  constructor() { 
    this.usuariosSubject = new BehaviorSubject<Usuario[]>(this.usuarios);
  };


///////////////////////////////  
// Metodos ABM de usuario /////
/////////////////////////////// 

// Obtener Lista de usuarios
obtenerUsuarios(): Observable<Usuario[]>{
  return this.usuariosSubject.asObservable();
}

// Obtener un usuario
obtenerUsuario(id: number): Observable<Usuario[]>{
  return this.obtenerUsuarios().pipe(
    map((usuarios: Usuario[]) => usuarios.filter((e: Usuario) => e.id === id))
  )
}

// Agregar usuario
agregarUsuario(usuario: Usuario){
  this.usuarios.push(usuario);
  this.usuariosSubject.next(this.usuarios);
}

// Borrar usuario
eliminarUsuario(id: number){
  let indice = this.usuarios.findIndex((u: Usuario) => u.id === id);
  if(indice > -1){
    this.usuarios.splice(indice, 1);
  }
  this.usuariosSubject.next(this.usuarios);
}

// Editar usuario
editarUsuario(usuario: Usuario){
  let indice = this.usuarios.findIndex((u: Usuario) => u.id === usuario.id);
  if(indice > -1){
    this.usuarios[indice] = usuario;
  }
  this.usuariosSubject.next(this.usuarios);
}

}
