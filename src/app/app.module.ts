import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule} from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { AlbumComponent } from './album/album.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
   SignupComponent,
    LoginComponent,
   MovieComponent,
   AlbumComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  HttpClientModule ,
  Ng2SearchPipeModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }