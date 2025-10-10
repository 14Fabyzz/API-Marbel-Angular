import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { CharacterListComponent } from './component/character-list/character-list.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent },
  
  { 
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [authGuard]
  }, 
  {
    path: 'posts',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule),
    canActivate: [authGuard]
  },
  {
    path: 'characters',
    component: CharacterListComponent
  
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // <-- Ruta por defecto
  { path: '**', redirectTo: '/home' } // <-- Ruta para cualquier otra cosa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { } 