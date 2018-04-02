import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContComponent } from './cont.component';
import { CBarComponent } from './cbar.component';
import { DataService } from './services/data.services';
import { SNavComponent } from './snav.component';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { ArtistsComponent } from './artists.component';

import { StreamsComponent } from './streams.component';
import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent, ContComponent, CBarComponent, SNavComponent, AlbumsComponent, 
    StreamsComponent, ArtistsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
