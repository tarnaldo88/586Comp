import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';

import {OKTA_CONFIG, OktaAuthGuard, OktaAuthModule} from "@okta/okta-angular";

// const config = {
//   clientId:'{clientid}',
//   issuer:'dev-2879688.okta.com',
//   redirectUri: 'http://localhost:4200/implicit/callback',
//   scopes: ['openid', 'profile', 'email'],
//   pkce:true
// };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    OktaAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
