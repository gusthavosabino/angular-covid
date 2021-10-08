import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Covid } from 'src/app/entities/covid.entity';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {


  @Input() pizzaData!: Covid[];


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
        radius: ['40%', '70%'],
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
