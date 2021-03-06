import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

if (process.env.NODE_ENV != 'development') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);