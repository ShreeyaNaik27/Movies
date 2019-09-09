import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
   {path:'',component:SignupComponent},
  {path: 'login',component:LoginComponent},
  {path :'movie', component: MovieComponent},
  {path:'album', component:AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }