import { Component, OnInit } from '@angular/core';
import { Cities } from 'src/app/entities/cities.entity';
import { Covid } from 'src/app/entities/covid.entity';
import { Estados } from 'src/app/entities/estados.entity';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  loading: boolean = false;

  infos: Covid[] = [];

  todos: any[] = [];

  cases: any;

  estados: Estados[] = [];

  idCidade: number;

  optionsCidades: Cities[] = [];

  selectedUF: boolean = false;
  loadingCity: boolean = false;
  estadosID: number;

  constructor(private $configService: ConfigService) {}

  ngOnInit(): void {
    this.pegarInfo();
    this.getEstados();
  }

  pegarInfo() {
    this.$configService.getInfo().subscribe((res) => {
      this.infos = res;
      this.infos.forEach(
        (res) => {},
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
    });
  }

  getEstados() {
    this.$configService.getState().subscribe((res) => {
      this.estados = res;
      console.log('resss', this.estados);

      this.estados.forEach((response) => {
        this.estadosID == response.id
        console.log('res', response.id);
      });
    });
  }

  onClick(event: any) {
    this.selectedUF = true;
    this.$configService.getCities(event).subscribe(res => {
      this.optionsCidades = res;
      console.log('event', event)
      this.loadingCity = false;

    })
  }

}
