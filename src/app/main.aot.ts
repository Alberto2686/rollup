import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
if (process.env.NODE_ENV != 'development') {
    enableProdMode();
}

import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../../aot/src/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
