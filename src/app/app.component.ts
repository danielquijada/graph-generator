import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Graph Generator';
  numbers = [1, 2, 3, 4, 5];

  navOptions = [
    {
      name: 'Dashboards',
      path: 'dashboards'
    }, {
      name: 'DataSources',
      path: 'datasources'
    }, {
      name: 'Presentation',
      path: 'presentation'
    }
  ];
}
