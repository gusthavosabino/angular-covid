import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/entities/covid.entity';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  infos: Covid[];

  todos = [];
  constructor(
    private $configService: ConfigService,
  ) { 
    this.infos = []
  }

  ngOnInit(): void {

    this.pegarInfo()

  }

  pegarInfo() {

    this.$configService.getInfo().subscribe(res => {
      this.infos = res
      console.log('res', this.infos)
    })

  }

}
