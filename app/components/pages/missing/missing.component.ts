import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  moduleId:module.id,
  selector: 'missing',
  templateUrl: 'missing.component.html'
})
export class MissingComponent {
  constructor(private appComponent: AppComponent){
    this.appComponent.setPageTitle("Page not Found");
  }
}