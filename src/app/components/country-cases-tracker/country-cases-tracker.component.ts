import { Component, OnInit } from '@angular/core';
import { CountryStats } from './../../domain/country-stats';


@Component({
  selector: 'country-cases-tracker',
  templateUrl: './country-cases-tracker.component.html',
  styleUrls: ['./country-cases-tracker.component.css']
})
export class CountryCasesTrackerComponent implements OnInit {

  isLoading = false;
  data: Array<CountryStats>;

  constructor() { }

  ngOnInit() {
    this.retrieveStats();
  }

  async retrieveStats() {
    this.isLoading = true;
    let response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/countries`);
    this.data = await response.json();
    this.isLoading = false;
  }

  getColumns() {
    return ['País', 'Casos', 'Confirmados', 'Mortes', 'Atualizado em'];
  }

  getData() {
    if (this.data && this.data['data']) {
      return this.data['data'];
    }
  }

  getProps() {
    return ['country', 'cases', 'confirmed', 'deaths', 'updated_at'];
  }
}
