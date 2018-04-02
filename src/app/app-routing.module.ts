import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { StreamsComponent } from './streams.component';
import { ArtistsComponent } from './artists.component';


const appRoutes: Routes = [
    { path: 'my music', component: AlbumsComponent },
    { path: 'my music/artists', component: ArtistsComponent},
    { path: 'streams', component: StreamsComponent },
  ];
  
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule ],
    declarations: []
  })
  export class AppRoutingModule { }