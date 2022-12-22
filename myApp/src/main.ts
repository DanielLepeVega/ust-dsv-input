import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


import {bootstrapApplication} from '@angular/platform-browser';
import {CodeComponent} from './app/code.component';

bootstrapApplication(CodeComponent);