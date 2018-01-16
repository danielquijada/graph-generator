import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DatasourceListComponent } from './datasource-list/datasource-list.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
  { path: 'dashboards', component: DashboardListComponent },
  { path: 'datasources', component: DatasourceListComponent },
  { path: 'presentation', component: PresentationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
