import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterCriteriaComponent } from './components/app-filter-criteria.component';
import { ContainerFilterComponent } from './components/app-main-container.component';
import { FilterComboComponent } from './components/app-filter-combo.component';
import { ButtonsFilterComponent } from './components/app-filter-buttons.component';
import { DisplayComponent } from './components/app-display.component';

import { ApiService } from './store/services/api.service';





@NgModule({
  declarations: [
    AppComponent,
    ContainerFilterComponent,
    FilterComboComponent,
    ButtonsFilterComponent,
    FilterCriteriaComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
