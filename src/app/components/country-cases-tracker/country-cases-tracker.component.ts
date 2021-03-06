import { ApiService } from './../../services/api-service.service';
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

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.retrieveStats();
  }

  retrieveStats() {
    this.isLoading = true;
    this.apiService.retrieveCountryStats().subscribe(
      response => {
        this.data = response;
        this.isLoading = false;
      }
    )
  }

  getColumns() {
    return ['País', 'Casos', 'Confirmados', 'Mortes', 'Atualizado em'];
  }

  getData() {
    if (this.data && this.data['data']) {
      let returnArray;
      returnArray = this.data['data'];
      return returnArray.sort((n1, n2) => {
        if (n1.deaths < n2.deaths) {
          return 1;
        }

        if (n1.deaths > n2.deaths) {
          return -1;
        }

        return 0;
      })
    }
  }

  getProps() {
    return ['country', 'cases', 'confirmed', 'deaths', 'updated_at'];
  }
}
