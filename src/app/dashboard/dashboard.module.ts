
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';

import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'covid-analytics', component: DashboardComponent }
]

@NgModule({
  declarations: [DashboardComponent],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    ChartsModule,
    HttpClientModule
  ]
})

export class DashboardModule { }