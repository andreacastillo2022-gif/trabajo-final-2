import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
@Component({
  selector: 'app-chat',  
  standalone: true,
  imports: [Sidebar],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {}
