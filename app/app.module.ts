import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';

import { NavbarComponent} from './components/navbar/navbar.component';
import { HomeComponent} from './components/pages/home/home.component';
import { AboutComponent} from './components/pages/about/about.component';
import { GithubComponent } from './components/pages/github/github.component';
import { MissingComponent} from './components/pages/missing/missing.component';
import { ContactComponent } from './components/pages/contact/contact.component';

import { GithubService } from './services/github/github.service';

const appRoutes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: '', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'github', component: GithubComponent },
  { path: '**', component: MissingComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule ],
  declarations: [ AppComponent, 
                  NavbarComponent,
                  //HomeComponent,
                  AboutComponent,
                  GithubComponent,
                  ContactComponent,
                  MissingComponent ],
  providers: [ Title, GithubService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }
