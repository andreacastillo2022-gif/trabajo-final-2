import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

 usuario = new FormControl('');
  password = new FormControl('');

  login() {
    console.log('Usuario:', this.usuario.value);
    console.log('Password:', this.password.value);
  
} }
