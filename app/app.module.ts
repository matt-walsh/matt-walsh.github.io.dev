import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';

import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import { HomeComponent} from './components/pages/home/home.component'
import { AboutComponent} from './components/pages/about/about.component'
import { MissingComponent} from './components/pages/missing/missing.component'
import { ContactComponent } from './components/pages/contact/contact.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: MissingComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, 
                  NavbarComponent, 
                  JumbotronComponent,
                  HomeComponent,
                  AboutComponent,
                  ContactComponent,
                  MissingComponent ],
  providers: [ Title ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }
