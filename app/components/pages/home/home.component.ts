import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  moduleId:module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls:['home.component.css']
})
export class HomeComponent {
  constructor(private appComponent: AppComponent){
    this.appComponent.setPageTitle("Home");
  }
}