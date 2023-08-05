import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from './dashboard.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { UsersCardsComponent } from './components/users-cards/users-cards.component';

@NgModule({
  declarations: [DashboardComponent, BarChartComponent, PieChartComponent, LineChartComponent, UsersCardsComponent],
  imports: [CommonModule, NgApexchartsModule],
})
export class DashboardModule {}
