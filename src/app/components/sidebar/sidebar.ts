import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  @Input() usuarios: any[] = [];

  @Output() usuarioSeleccionado = new EventEmitter<any>();

  seleccionar(user: any) {
    this.usuarioSeleccionado.emit(user);
  }
} 
