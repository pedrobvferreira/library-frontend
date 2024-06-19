import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment.dev';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const APP_CONFIG = new InjectionToken('app.config');

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(appRoutes),
    { provide: 'API_URL', useValue: environment.apiUrl }
  ],
};