import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Covid } from 'src/app/entities/covid.entity';

@Component({
  selector: 'app-pizza-chart',
  templateUrl: './pizza-chart.component.html',
  styleUrls: ['./pizza-chart.component.css']
})
export class PizzaChartComponent implements OnInit {

  @Input() pizzaData: Covid[];


  datanumber!: any;
  dataValue!: any;

  chartOption: EChartsOption = {
    title: {
      text: 'COVID19 BR',
      subtext: 'Covid data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: this.dataValue, name: this.datanumber },

        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  constructor() {

  }

  ngOnInit(): void {
    this.load();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.datanumber = [];
    this.dataValue = [];

    if (changes.pizzaData && changes.pizzaData.currentValue) {
      this.pizzaData = changes.pizzaData.currentValue;
      this.load();
    }
  }

  load() {
    this.dataValue = [];
    this.datanumber = [];

    if (this.pizzaData != undefined) {
        this.pizzaData.forEach(element => {
          this.datanumber.push(element.cases);
          this.dataValue.push(element.state);
        });
      }
      else {
        this.dataValue = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
        this.datanumber = [300, 500, 100];
      }

  }

}
