import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaChartComponent } from './components/pizza-chart/pizza-chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { PagesModule } from './pages/pages.module';




@NgModule({
  declarations: [
    PizzaChartComponent,
    DonutChartComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts'),}),
  ],
  exports: [
    PizzaChartComponent,
    DonutChartComponent,
    
  ]
})
export class SharedModule { }
