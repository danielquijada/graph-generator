import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Dashboard } from '../dashboard';
import { MatIcon, MatPaginator, MatTableDataSource } from '@angular/material';

// MOCK
const MOCK_DASHBOARDS: Dashboard[] = [
  { id: 1, name: 'Hydrogen' },
  { id: 2, name: 'Helium' },
  { id: 3, name: 'Lithium' },
  { id: 4, name: 'Beryllium' },
  { id: 5, name: 'Boron' },
  { id: 6, name: 'Carbon' },
  { id: 7, name: 'Nitrogen' },
  { id: 8, name: 'Oxygen' },
  { id: 9, name: 'Fluorine' },
  { id: 10, name: 'Neon' },
  { id: 11, name: 'Sodium' },
  { id: 12, name: 'Magnesium' },
  { id: 13, name: 'Aluminum' },
  { id: 14, name: 'Silicon' },
  { id: 15, name: 'Phosphorus' },
  { id: 16, name: 'Sulfur' },
  { id: 17, name: 'Chlorine' },
  { id: 18, name: 'Argon' },
  { id: 19, name: 'Potassium' },
  { id: 20, name: 'Calcium' },
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
