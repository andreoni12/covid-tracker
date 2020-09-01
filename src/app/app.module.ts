import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateCasesTrackerComponent } from './components/state-cases-tracker/state-cases-tracker.component';
import { BrazilCasesTrackerComponent } from './components/brazil-cases-tracker/brazil-cases-tracker.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CountryCasesTrackerComponent } from './components/country-cases-tracker/country-cases-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    StateCasesTrackerComponent,
    BrazilCasesTrackerComponent,
    CustomTableComponent,
    CountryCasesTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
