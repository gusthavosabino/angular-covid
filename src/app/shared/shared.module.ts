import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './components/pizza/pizza.component';
import { DonutComponent } from './components/donut/donut.component';
import { BarComponent } from './components/bar/bar.component';
import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    PizzaComponent,
    DonutComponent,
    BarComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
    
  ],
  exports: [
    PizzaComponent,
    DonutComponent,
    BarComponent,

  ]
})
export class SharedModule { }
