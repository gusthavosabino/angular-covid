import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaChartComponent } from './components/pizza-chart/pizza-chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { PagesModule } from './pages/pages.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    PizzaChartComponent,
    DonutChartComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts'),}),
  ],
  exports: [
    PizzaChartComponent,
    DonutChartComponent,
    MatProgressSpinnerModule,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
