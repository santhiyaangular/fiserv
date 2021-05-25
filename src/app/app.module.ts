import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FiservMaterialModule } from 'src/app/material-module';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AstronomypicListComponent } from './astronomypic-list/astronomypic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from 'src/app/shared/appHeightlight';
import { AstronomypicDetailComponent } from './astronomypic-detail/astronomypic-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    AstronomypicListComponent,
    HighlightDirective,
    AstronomypicDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FiservMaterialModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
