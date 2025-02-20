import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment.dev';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
