import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HomeModule } from './components/home/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { HeaderComponent } from './components/bookstore-components/header/header.component';
import { BookstoreHomeComponent } from './components/bookstore-components/bookstore-home/bookstore-home.component';
import {MatIconModule} from '@angular/material/icon';
import { DisplayBookComponent } from './components/bookstore-components/display-book/display-book.component';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CreateNoteComponent,
    DisplayNotesComponent,
    HeaderComponent,
    BookstoreHomeComponent,
    DisplayBookComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    FlexLayoutModule,
    OAuthModule.forRoot(),
    MatIconModule,
    MatBadgeModule
    // HomeModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// ndrx
// ngrx
// store 