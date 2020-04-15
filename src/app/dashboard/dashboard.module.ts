
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '/covid-analyticst', component: DashboardComponent }
]

@NgModule({
  declarations: [DashboardComponent],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    ChartsModule
  ]
})

export class DashboardModule { }
