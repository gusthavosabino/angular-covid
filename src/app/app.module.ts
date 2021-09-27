import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PagesComponent } from './shared/pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts'),}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
