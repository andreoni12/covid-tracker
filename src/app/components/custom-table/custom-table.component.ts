import { PlaceStats } from './../../domain/place-stats';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent {

  @Input() columns: Array<String>;
  @Input() rows: Array<PlaceStats>;

  constructor() { }

}
