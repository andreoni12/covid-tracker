import { ApiService } from './../../services/api-service.service';
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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  async retrieveStats(state: string) {
    this.isLoading = true;
    this.apiService.retrieveStatesStats(state).subscribe(
      response => {
        this.data = response;
        this.isLoading = false;
      }
    )
  }

  onStateSelect() {
    this.retrieveStats(this.currentState.toLowerCase());
  }

}
