import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BaseService } from './project/shared/base.service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AlertsModule } from 'angular-alert-module';
import { AlertComponent } from './project/shared/alert/alert.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [
    CommonModule,
    BrowserModule,

    RouterModule,
    AppRoutingModule,
    AlertsModule.forRoot(),

    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [
    BaseService,
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: 'localhost:4200' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
