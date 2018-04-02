import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataService } from './services/data.services';

@Component({
  selector: 'artists',
  templateUrl: './html/artists.component.html',
  styleUrls: ['./css/artists.component.css']
})
export class ArtistsComponent implements OnInit {

  mediaData;
  artists=[];
  
  ngOnInit(){
    this.artists=this.dataservice.getArtists();
  }

  constructor( private dataservice: DataService ) { }
  

  //FUNCTIONS for JUMP_BAR

  showjumpBar(e){
    e=e.target;
    for(var i=0;i<e.childNodes.length;i++){
      if (e.childNodes[i].className == "hov-area") {
        e.childNodes[i].style.display="flex";
        break;
      }
    }
  }

  hidejumpBar(e){
    e=e.target;
    for(var i=0;i<e.childNodes.length;i++){
      if (e.childNodes[i].className == "hov-area") {
        e.childNodes[i].style.display="none";
        break;
      }
    }
  }
}
