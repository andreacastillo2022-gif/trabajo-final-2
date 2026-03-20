import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-chat',  
  standalone: true,
  imports: [Sidebar, FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat { 
  
  mensajeNuevo = ' ';
  
  usuarios = [
  {
    id: 1,
    nombre: 'Luna',
    avatar: 'https://st2.depositphotos.com/4967775/11238/v/450/depositphotos_112387970-stock-illustration-avatar-girls-icon-vector-woman.jpg',
    mensajes: [
      { texto: 'Holaaaaaa', mio: false },
      { texto: 'Holii', mio: true }
    ]
  },
  {
    id: 2,
    nombre: 'Andrea',
    avatar: 'https://st2.depositphotos.com/4967775/11255/v/450/depositphotos_112551512-stock-illustration-avatar-girls-icon-vector-woman.jpg',
    mensajes: [
      { texto: 'Todo bien', mio: false },
      { texto: 'Buenos dias', mio: true },
      { texto: 'Como estas?', mio: false },
      { texto: 'Contestaaa', mio: false },
    ]
  }
  ]
  usuarioActivo = this.usuarios[0];

  seleccionarUsuario(user: any) {
    this.usuarioActivo = user;
  }

  enviarMensaje() {

    if (!this.mensajeNuevo.trim()) return;
    this.usuarioActivo.mensajes.push({
      texto: this.mensajeNuevo,
      mio: true
    });

    const texto = this.mensajeNuevo;
    this.mensajeNuevo = '';

    setTimeout(() => {
      this.usuarioActivo.mensajes.push({
        texto: 'Respuesta automática',
        mio: false
      });
    }, 1000);
  

  }};


