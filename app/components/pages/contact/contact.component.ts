import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  moduleId:module.id,
  selector: 'contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent {
  constructor(private appComponent: AppComponent){
    this.appComponent.setPageTitle("Contact");
  }
}
