import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
} from 'ng-apexcharts';

type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: '[app-bar-chart]',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'distibuted',
          data: [21, 22, 10, 28, 16],
        },
      ],
      chart: {
        height: 250,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: [
        '#008FFB',
        '#00E396',
        '#FEB019',
        '#FF4560',
        '#775DD0',
        '#546E7A',
        '#26a69a',
        '#D10CE8',
      ],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          ['John', 'Doe'],
          ['Joe', 'Smith'],
          ['Jake', 'Williams'],
          'Amber',
          ['Peter', 'Brown'],
        ],
        labels: {
          style: {
            colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
            fontSize: '12px',
          },
        },
      },
    };
  }
}
