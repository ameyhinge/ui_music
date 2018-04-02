import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataService } from './services/data.services';

@Component({
  selector: 'albums',
  templateUrl: './html/albums.component.html',
  styleUrls: ['./css/albums.component.css']
})
export class AlbumsComponent implements OnInit {

  mediaData;
  albums=[];

  ngOnInit(){
    this.albums=this.dataservice.getAlbums();
  }
  
  constructor(private dataservice: DataService) { }
  

  //ALBUM CLICKED
  albumClicked(e){
    e=e.target;
    if(e.className!="album-box"){
      for(var i=0;i<e.parentElement.childNodes.length;i++){
        if(e.parentElement.childNodes[i].className == "album-art"){
          e.parentElement.childNodes[i].style.width="100%";
          e.parentElement.childNodes[i].style.height="100%";
        }
      }
    }
    else{
      for(var i=0;i<e.childNodes.length;i++){
        if(e.childNodes[i].className == "album-art"){
          e.childNodes[i].style.width="100%";
          e.childNodes[i].style.height="100%";
        }
      }
    }
  }

  //FUNCTIONS for JUMP_BAR

  showjumpBar(e){
    e=e.target;
    for(var i=0;i<e.childNodes.length;i++){
      if (e.childNodes[i].className == "hov-area") {
        e.childNodes[i].style.display="flex";
      }
      if(e.childNodes[i].className == "album-art"){
        e.childNodes[i].style.width="110%";
        e.childNodes[i].style.height="110%"; 
      }
    }
  }

  hidejumpBar(e){
    e=e.target;
    for(var i=0;i<e.childNodes.length;i++){
      if (e.childNodes[i].className == "hov-area") {
        e.childNodes[i].style.display="none";
      }
      if(e.childNodes[i].className == "album-art"){
        e.childNodes[i].style.width="100%";
        e.childNodes[i].style.height="100%";
      }
    }
  }


}
