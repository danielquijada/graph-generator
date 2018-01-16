import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

const MOCK_DATASOURCES = [ // MOCK
  { id: 1, name: 'Hugo' },
  { id: 2, name: 'Hector' },
  { id: 3, name: 'Laura' },
  { id: 4, name: 'Bernardo' },
  { id: 5, name: 'Bárbara' },
  { id: 6, name: 'Carlos' },
  { id: 7, name: 'Nina' },
  { id: 8, name: 'Omar' },
  { id: 9, name: 'Fernanda' },
  { id: 10, name: 'Nuria' },
  { id: 11, name: 'Sara' },
  { id: 12, name: 'Marta' },
  { id: 13, name: 'Andrea' },
  { id: 14, name: 'Sandra' },
  { id: 15, name: 'Pedro' },
  { id: 16, name: 'Samantha' },
  { id: 17, name: 'Chloe' },
  { id: 18, name: 'Andrés' },
  { id: 19, name: 'Paco' },
  { id: 20, name: 'César' },
];

@Component({
  selector: 'app-datasource-list',
  templateUrl: './datasource-list.component.html',
  styleUrls: ['./datasource-list.component.css']
})
export class DatasourceListComponent implements AfterViewInit {

  // Table configs
  displayedColumns = ['id', 'name'];
  dataSource = new MatTableDataSource(MOCK_DATASOURCES);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }
}
