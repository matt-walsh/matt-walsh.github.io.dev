import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  moduleId:module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  constructor(private appComponent: AppComponent){
    this.appComponent.setPageTitle("About");
  }
}
