import { compileComponentFromMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';

//const CALLBACK_PATH = 'implicit/callback';
const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Books', component: BooksComponent},
  {path: 'Authors', component: AuthorsComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo:'Home'},
  //{path: CALLBACK_PATH},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
