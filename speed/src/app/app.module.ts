import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterCriteriaComponent } from './components/app-filter-criteria.component';
import { ContainerFilterComponent } from './components/app-main-container.component';
import { FilterComboComponent } from './components/app-filter-combo.component';
import { ButtonsFilterComponent } from './components/app-filter-buttons.component';
import { DisplayComponent } from './components/app-display.component';

import { ApiService } from './store/services/api.service';

import { metaReducers, reducers } from './components/reducers';
import { CriteriaEffects } from './components/reducers/criteria.effects';





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
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production
      ? StoreDevtoolsModule.instrument()
      : [],
    EffectsModule.forRoot([CriteriaEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
