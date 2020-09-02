import { ConstantsSelects } from './../../domain/constants-select';
import { PlaceStats } from './../../domain/place-stats';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'state-cases-tracker',
  templateUrl: './state-cases-tracker.component.html',
  styleUrls: ['./state-cases-tracker.component.css']
})
export class StateCasesTrackerComponent implements OnInit {

  data: PlaceStats;
  isLoading = false;
  currentState: string;

  states = ConstantsSelects.states;

  constructor() { }

  ngOnInit(): void {
  }

  async retrieveStats(state: string) {
    this.isLoading = true;
    let response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${state}`);
    this.data = await response.json();
    this.isLoading = false;
  }

  onStateSelect() {
    this.retrieveStats(this.currentState.toLowerCase());
  }

}
