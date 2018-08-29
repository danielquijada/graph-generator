import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Dashboard } from '../dashboard';
import { MatIcon, MatPaginator, MatTableDataSource } from '@angular/material';

// MOCK
const MOCK_DASHBOARDS: Dashboard[] = [
  {
    id: 1, name: 'Hydrogen', description: 'Dashboard about the 1º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 2, name: 'Helium', description: 'Dashboard about the 2º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 3, name: 'Lithium', description: 'Dashboard about the 3º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 4, name: 'Beryllium', description: 'Dashboard about the 4º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 5, name: 'Boron', description: 'Dashboard about the 5º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 6, name: 'Carbon', description: 'Dashboard about the 6º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 7, name: 'Nitrogen', description: 'Dashboard about the 7º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 8, name: 'Oxygen', description: 'Dashboard about the 8º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 9, name: 'Fluorine', description: 'Dashboard about the 9º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 10, name: 'Neon', description: 'Dashboard about the 10º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 11, name: 'Sodium', description: 'Dashboard about the 11º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 12, name: 'Magnesium', description: 'Dashboard about the 12º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 13, name: 'Aluminum', description: 'Dashboard about the 13º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 14, name: 'Silicon', description: 'Dashboard about the 14º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 15, name: 'Phosphorus', description: 'Dashboard about the 15º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 16, name: 'Sulfur', description: 'Dashboard about the 16º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 17, name: 'Chlorine', description: 'Dashboard about the 17º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 18, name: 'Argon', description: 'Dashboard about the 18º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 19, name: 'Potassium', description: 'Dashboard about the 19º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
  {
    id: 20, name: 'Calcium', description: 'Dashboard about the 20º element', json: '',
    creationDate: '2018-08-08T20:58:47.756Z', modificationDate: '2018-08-08T20:58:47.756Z'
  },
];

// tslint:disable-next-line:max-line-length
const MOCK_JSON = '{"$schema":"https://vega.github.io/schema/vega/v3.0.json","width":500,"height":200,"padding":5,"data":[{"name":"table","values":[{"x":0,"y":28,"c":0},{"x":0,"y":55,"c":1},{"x":1,"y":43,"c":0},{"x":1,"y":91,"c":1},{"x":2,"y":81,"c":0},{"x":2,"y":53,"c":1},{"x":3,"y":19,"c":0},{"x":3,"y":87,"c":1},{"x":4,"y":52,"c":0},{"x":4,"y":48,"c":1},{"x":5,"y":24,"c":0},{"x":5,"y":49,"c":1},{"x":6,"y":87,"c":0},{"x":6,"y":66,"c":1},{"x":7,"y":17,"c":0},{"x":7,"y":27,"c":1},{"x":8,"y":68,"c":0},{"x":8,"y":16,"c":1},{"x":9,"y":49,"c":0},{"x":9,"y":15,"c":1}],"transform":[{"type":"stack","groupby":["x"],"sort":{"field":"c"},"field":"y"}]}],"scales":[{"name":"x","type":"band","range":"width","domain":{"data":"table","field":"x"}},{"name":"y","type":"linear","range":"height","nice":true,"zero":true,"domain":{"data":"table","field":"y1"}},{"name":"color","type":"ordinal","range":"category","domain":{"data":"table","field":"c"}}],"axes":[{"orient":"bottom","scale":"x","zindex":1},{"orient":"left","scale":"y","zindex":1}],"marks":[{"type":"rect","from":{"data":"table"},"encode":{"enter":{"x":{"scale":"x","field":"x"},"width":{"scale":"x","band":1,"offset":-1},"y":{"scale":"y","field":"y0"},"y2":{"scale":"y","field":"y1"},"fill":{"scale":"color","field":"c"}},"update":{"fillOpacity":{"value":1}},"hover":{"fillOpacity":{"value":0.5}}}}]}';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements AfterViewInit {

  // Table configs
  displayedColumns = ['id', 'name', 'json'];
  dataSource = new MatTableDataSource<Dashboard>(MOCK_DASHBOARDS);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  logHey() {
    console.log('hey');
  }

  constructor() { }
}
