import { InjectionToken } from '@angular/core';
import { serverConfig } from './app.config.server';

export const APP_CONFIG = new InjectionToken('app.config');

export const AppConfig = {
  apiUrl: serverConfig.apiUrl
};
