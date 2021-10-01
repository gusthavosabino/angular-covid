import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { Covid } from 'src/app/entities/covid.entity';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  @Input() pizzaData: Covid[];
  @Input() chartTittleType: string;


  public ChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'left',
    },
    tooltips: {
      enabled: true
    }
  };

  public ChartColors: Color[] = [
    {
      borderColor: [
        "#0052E4",
        "#FDA900",
        "#3EB100",
        "#FF5733",
        "#581845",
        "#00FD95",
        "#40814c",
        "#6eb31c",
        "#31c038",
        "#061016",
        "#9ce19a",
        "#db80e0",
        "#075918",
        "#38f787",
        "#2a8851",
        "#80199d",
        "#c409eb",
        "#82a84e",
        "#f9e33c",
        "#ea9d57",
        "#877cae",
        "#105479",
        "#eeeb6a",
        "#0f45eb",
        "#702cb0",
        "#797e78",
        "#054f87",
        "#fbc4cd",

      ],
      backgroundColor: [
        'rgba(0, 82, 228, 0.5)',
        'rgba(253, 169, 0, 0.5)',
        'rgba(62, 177, 0, 0.5)',
        'rgba(255, 87, 51, 0.5)',
        'rgba(88, 24, 69, 0.5)',
        'rgba(0, 253, 149, 0.5)',
        'rgba(64, 129, 76, 0.5)',
        'rgba(110, 179, 28, 0.5)',
        'rgba(49, 192, 56, 0.5)',
        'rgba(6, 16, 22, 0.5)',
        'rgba(156, 225, 154, 0.5)',
        'rgba(219, 128, 224, 0.5)',
        'rgba(7, 89, 24, 0.5)',
        'rgba(56, 247, 135, 0.5)',
        'rgba(42, 136, 81, 0.5)',
        'rgba(128, 25, 157, 0.5)',
        'rgba(196, 9, 235, 0.5)',
        'rgba(130, 168, 78, 0.5)',
        'rgba(249, 227, 60, 0.5)',
        'rgba(234, 157, 87, 0.5)',
        'rgba(135, 124, 174, 0.5)',
        'rgba(16, 84, 121, 0.5)',
        'rgba(238, 235, 106, 0.5)',
        'rgba(15, 69, 235, 0.5)',
        'rgba(112, 44, 176, 0.5)',
        'rgba(121, 126, 120, 0.5)',
        'rgba(5, 79, 135, 0.5)',
        'rgba(251, 196, 205, 0.5)',

      ],
    }]

  public ChartLabels: Label[] = [];
  public ChartData: SingleDataSet = [];
  public ChartType: ChartType = 'doughnut';
  public ChartLegend = true;
  public ChartPlugins = [];

  constructor() {

  }

  ngOnInit(): void {
    this.load();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ChartLabels = [];
    this.ChartData = [];

    if (changes.pizzaData && changes.pizzaData.currentValue) {
      this.pizzaData = changes.pizzaData.currentValue;
      this.load();
    }
  }

  load() {

    this.ChartLabels = [];
    this.ChartData = [];

    if (this.chartTittleType == 'Casos COVID no Brasil') {

      if (this.pizzaData != undefined) {
        this.pizzaData.forEach(element => {
          this.ChartLabels.push(element.state);
          this.ChartData.push(element.cases);
        });
      }

      else {
        this.ChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
        this.ChartData = [300, 500, 100];
      }
    }

    else {
      return;
    }

  }

}