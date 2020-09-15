import { PlaceStats } from './../../domain/place-stats';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'brazil-cases-tracker',
  templateUrl: './brazil-cases-tracker.component.html',
  styleUrls: ['./brazil-cases-tracker.component.css']
})
export class BrazilCasesTrackerComponent implements OnInit {

  isLoading = false;
  data: Array<PlaceStats>;
  chosenDate: Date;

  dateConfig = {
    dateInputFormat: 'DD/MM/YYYY',
    containerClass: 'theme-default'
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.chosenDate = new Date();
  }

  retrieveStats(day: string, month: string, year: string) {
    this.isLoading = true;
    this.apiService.retrieveBrazilStats(day, month, year).subscribe(
      response => {
        this.data = response;
        this.isLoading = false;
      }
    )
  }

  onDateSelect(event: Date) {
    this.chosenDate = event;
    if (this.chosenDate) {
      const year = this.chosenDate.toJSON().substring(0, 4);
      const month = this.chosenDate.toJSON().substring(5, 7);
      const day = this.chosenDate.toJSON().substring(8, 10);
      this.retrieveStats(day, month, year);
    }
  }

  getColumns() {
    return ['UF', 'Casos', 'Mortes'];
  }

  getData() {
    if (this.data && this.data['data']) {
      return this.data['data'];
    }
  }

  getProps() {
    return ['uf', 'cases', 'deaths'];
  }
}
