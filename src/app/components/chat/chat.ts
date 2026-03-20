import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
@Component({
  selector: 'app-chat',  
  standalone: true,
  imports: [Sidebar],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  
  usuarios = [
  {
    id: 1,
    nombre: 'Luna',
    avatar: '',
    mensajes: [
      { texto: 'Holaaaaaa', mio: false },
      { texto: 'Holii', mio: true }
    ]
  },
  {
    id: 2,
    nombre: 'Andrea',
    avatar: '',
    mensajes: [
      { texto: 'Todo bien', mio: false },
      { texto: 'Buenos dias', mio: true }
    ]
  }
  ]
  usuarioActivo = this.usuarios[0];

  seleccionarUsuario(user: any) {
    this.usuarioActivo = user;
  }};

