import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api-service.service';
import { PropPipe } from './pipes/prop.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateCasesTrackerComponent } from './components/state-cases-tracker/state-cases-tracker.component';
import { BrazilCasesTrackerComponent } from './components/brazil-cases-tracker/brazil-cases-tracker.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CountryCasesTrackerComponent } from './components/country-cases-tracker/country-cases-tracker.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CovidAdvicesComponent } from './components/covid-advices/covid-advices.component';
import { DatePipe, DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    StateCasesTrackerComponent,
    BrazilCasesTrackerComponent,
    CustomTableComponent,
    CountryCasesTrackerComponent,
    LoaderComponent,
    CovidAdvicesComponent,
    PropPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [
    DatePipe,
    DecimalPipe,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
