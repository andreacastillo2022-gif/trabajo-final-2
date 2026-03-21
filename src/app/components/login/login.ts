import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})


export class Login implements OnInit { 
  
  usuario = new FormControl('');
  password = new FormControl('');

ngOnInit() {

  const usuariosGuardados = localStorage.getItem('usuarios');
  const data = localStorage.getItem('usuarios');

  if (!usuariosGuardados) {
    const usuarios = [
      { username: 'andrea', password: '1234' },
      { username: 'luna', password: '1234' },
      { username: 'emiliano', password: '1234' },
    ];

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  }

  login() {

    const data = localStorage.getItem('usuarios');
    const usuarios = data ? JSON.parse(data) : [];

    const encontrado = usuarios.find(
      (u: any) =>
        u.username === this.usuario.value &&
        u.password === this.password.value
    );

    if (encontrado) {
      localStorage.setItem('usuarioActivo', JSON.stringify(encontrado));
      window.location.href = '/chat';
    }
    else {
        const h1 = document.querySelector('h1');
        if (h1) {
            h1.textContent = 'Usuario o contraseña incorrectos';
        }
    }
}}
