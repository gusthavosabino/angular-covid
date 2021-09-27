import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/entities/covid.entity';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  loading: boolean = false;

  infos: Covid[] = [];

  todos: any[] = [];

  cases: any;
  constructor(
    private $configService: ConfigService,
  ) { 
    this.infos = []
    this.todos = [];
  }

  ngOnInit(): void {

    this.pegarInfo()

  }

  pegarInfo() {

    this.$configService.getInfo().subscribe(res => {
      this.infos = res;
      this.infos.forEach(res => {
        var casos = res.cases;
      })

    })

  }

}
