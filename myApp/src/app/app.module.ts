import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataComponent } from './data/data.component';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
