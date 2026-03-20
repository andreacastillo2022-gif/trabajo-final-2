import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})


export class Login {

 usuario = new FormControl('');
  password = new FormControl('');

  login() {
    console.log('Usuario:', this.usuario.value);
    console.log('Password:', this.password.value);

    if (!this.usuario.value || !this.password.value) {
      alert('Completá los campos');
      return;
    }

    localStorage.setItem('usuario', this.usuario.value);

    this.router.navigate(['/chat']);

    };
  constructor(private router: Router) {}


} 
