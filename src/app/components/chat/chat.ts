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
    nombre: 'Emiliano',
    avatar: 'https://i.pinimg.com/736x/ca/02/e0/ca02e07e3875d350d7cde6d0bbe3dbb5.jpg',
    lastSeen: 'En linea',
    online: true,
    mensajes: [
      { texto: 'Te recuerdo que', mio: false },
      { texto: 'tenes que hacer la tarea', mio: false },
      { texto: '¿Has terminado ya?', mio: false },
      { texto: 'Mirá esto', imagen: 'https://media.tenor.com/XM45GfarmEgAAAAj/sseeyall-bubu-dudu.gif', mio: false }
    ]
  },
  {
    id: 2,
    nombre: 'Andrea',
    avatar: 'https://i.pinimg.com/736x/43/69/0a/43690ad3ce2628328e65ad8e272a30b5.jpg',
    lastSeen: 'Hace 2 horas',
    online: false,
    mensajes: [
      { texto: 'Todo bien', mio: false },
      { texto: 'Buenos dias', mio: true },
      { texto: 'Como estas?', mio: false },
      { texto: 'Contestaaa', mio: false },
    ]
  },
  
  {
    id: 3,
    nombre: 'Luna',
    avatar: 'https://st2.depositphotos.com/4967775/11238/v/450/depositphotos_112387970-stock-illustration-avatar-girls-icon-vector-woman.jpg',
    lastSeen: 'Hace 1 hora',
    online: false,
    mensajes: [
      { texto: 'Holaaaaaa', mio: false },
      { texto: 'Holii', mio: true }
    ]
  },

   {
    id: 4,
    nombre: 'Norma',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYABssYssgy6p2GygHbNn0nsqHdGxr1M_G2g&s',
    lastSeen: 'En linea',
    online: true,
    mensajes: [
      { texto: 'Espero que este todo bien', mio: false },
      { texto: 'Buenos dias', mio: true },
      { texto: 'Avisame', mio: false },
      { texto: 'cuando estes libre.', mio: false },
    ]
  },


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


