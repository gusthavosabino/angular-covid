import { Component, OnInit } from '@angular/core';
import { Covid, Paises } from 'src/app/entities/covid.entity';
import { ConfigService } from 'src/app/services/config.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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

  infoPaises: Paises[];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  dataSource = ELEMENT_DATA;

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

    this.$configService.getInfoPaises().subscribe(res => {
      this.infoPaises = res;
      console.log(this.infoPaises)
    })

  }


}
