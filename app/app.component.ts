import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  private pageTitle: string = "Matt Walsh - ";

  constructor(private titleService: Title) { }

  setPageTitle(subtitle){
    this.titleService.setTitle(this.pageTitle + subtitle);
  }
}
