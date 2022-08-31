import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ChartConfiguration,
  ChartData,
  ChartEvent,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
} from 'ng-apexcharts';
import { HealthPredictionService } from 'src/app/services/health-prediction.service';

export type ChartOptionss = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  toolbar: ApexTooltip;
};

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
})
export class Page3Component implements OnInit {
  // @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @ViewChild('chart') chartt: ChartComponent;
  public chartOptionss: Partial<ChartOptionss>;
  patientDetail: any;
  id: number;
  fgraph: any;
  a: number;
  diastolic: number;
  sialos: number;
  bmi: any;
  glucose: any;
  cholestralHigh: number;
  choestralLow: number;
  list: any[] = [];
  chart: any;
  msgalert = false;
  msgalert1 = false;
  Responsedata: any;
  msgshow: any;
  public static argdata: any;
  sta: any;

  constructor(private _service: HealthPredictionService) {
    console.log('Constructor');
    this.patientDetail = JSON.parse(localStorage.getItem('data'));
    console.log(this.patientDetail);
    Page3Component.argdata = this.patientDetail;
    this.diastolic = this.patientDetail.diastolic;
    console.log(this.diastolic);
    this.sialos = this.patientDetail.systolic;
    this.cholestralHigh = this.patientDetail.cholesterol_HDL;
    this.choestralLow = this.patientDetail.cholesterol_LDL;
    this.bmi = this.patientDetail.bmi;
    this.glucose = this.patientDetail.avg_glucose_level;
    this.list = [
      this.diastolic,
      this.sialos,
      this.cholestralHigh,
      this.choestralLow,
      this.bmi,
      this.glucose,
    ];
    console.log(this.list);

    //  console.log(Page3Component.argdata.diastolic);
  }

  //  public barChartOptions: ChartConfiguration['options'] = {
  //   elements: {
  //     line: {
  //       tension: 0.4
  //     }
  //   },
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: {
  //     x: {},
  //     y: {
  //       min: 10
  //     }
  //   },
  //   plugins: {
  //     legend: { display: true },
  //   }
  // };
  // fun(){
  //   return 10;
  // }
  // public barChartLabels: string[] = [ 'Diastolic', 'Systolic', 'Avg Glucose', 'Cholesterol_HDL', 'Cholesterol_LDL','BMI' ];
  // public barChartType: ChartType = 'bar';

  // public barChartData: ChartData<'bar'> = {

  //   labels: this.barChartLabels,
  //   datasets: [
  //     { data: [ 65, 59, 80, 81, 56, 55 ], label: 'Series A' },
  //     { data: this.list, label: 'Series B' }
  //   ]

  // };

  // // events
  // public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  //   console.log(this.list);

  // }

  // public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  // }

  // public randomize(): void {
  //   this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  // }

  async ngOnInit(): Promise<void> {
    await this._service.sendingDataToBackend();
    console.log(this._service.resList);
    this.Responsedata = this._service.resList;
    // console.log(this.Responsedata.status);
    this.sta = this.Responsedata.status;
    console.log(this.sta);

    //  this.a =this.getRandomInt(30,220)
    // console.log(this.a);

    // this._service.sendingDataToBackend();
    this.chart = document.getElementById('myChart');
    // console.log(Page3Component.argdata);
    // this._service.sendingDataToBackend();
    Chart.register(...registerables);
    this.loadchart();
    // console.log(this._service.resList);

    // this.fgraph = HealthPredictionService.response ;
    // console.log(this.fgraph.age);

    this.chartOptionss = {
      //   toolbar: {
      //     show: false

      // },
      plotOptions: { bar: { columnWidth: '40%' } },
      chart: {
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          data: [
            {
              x: 'Age(>50)',
              y: 90,
            },
            {
              x: 'Smoking Habit',
              y: 60,
            },
            {
              x: 'BMI',
              y: 70,
            },
            {
              x: 'Residence(Urban)',
              y: 66,
            },
            {
              x: 'Avg Glucose Level',
              y: 58,
            },
            {
              x: 'Work Type(Private)',
              y: 79,
            },
          ],
        },
      ],
    };

    if (this.Responsedata) {
      if (this.Responsedata.status == 'true') {
        console.log('Data reci');

        this.msgalert = true;
        this.msgshow = `The patient has ${this.Responsedata.result} % chances of getting a cardiovascular stroke! `;
      }
      if (this.Responsedata.status == 'trueData') {
        this.msgalert1 = true;
        this.msgshow = `Patient might not get a stroke! `;
      }
    }
  }

  loadchart(): void {
    const myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: [
          'Diastolic',
          'Systolic',
          'Avg Glucose',
          'Cholesterol_HDL',
          'Cholesterol_LDL',
          'BMI',
        ],
        datasets: [
          {
            label: 'Patient data',
            data: [
              this.diastolic,
              this.sialos,
              this.glucose,
              this.cholestralHigh,
              this.choestralLow,
              this.bmi,
            ],

            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
          {
            label: 'Optimal Data',
            data: [90, 150, 140, 40, 140, 21],

            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/healthcare-dataset.csv');
    link.setAttribute('download', `DataSet.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
