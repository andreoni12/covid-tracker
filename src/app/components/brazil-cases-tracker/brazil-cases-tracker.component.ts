import { PlaceStats } from './../../domain/place-stats';
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.chosenDate = new Date();
  }

  async retrieveStats(day: string, month: string, year: string) {
    this.isLoading = true;
    let response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/${year}${month}${day}`);
    this.data = await response.json();
    console.log(this.data);
    this.isLoading = false;
  }

  onDateSelect(event: Date) {
    this.chosenDate = event;
    if (this.chosenDate) {
      const year = this.chosenDate.toLocaleDateString().substring(6, 10);
      const month = this.chosenDate.toLocaleDateString().substring(3, 5);
      const day = this.chosenDate.toLocaleDateString().substring(0, 2);
      this.retrieveStats(day, month, year);
    }
  }

  getColumns() {
    return ['UF', 'Casos', 'Mortes'];
  }
}