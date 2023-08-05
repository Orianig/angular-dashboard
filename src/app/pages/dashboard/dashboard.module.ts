import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from './dashboard.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [DashboardComponent, BarChartComponent],
  imports: [CommonModule, NgApexchartsModule],
})
export class DashboardModule {}
