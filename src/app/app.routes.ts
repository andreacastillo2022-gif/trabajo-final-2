import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Chat } from './components/chat/chat';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'chat', component: Chat }
];
