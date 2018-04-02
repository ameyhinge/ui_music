import { Component } from '@angular/core';
import { navService } from './services/navitems.services';

@Component({
  selector: 'snav',
  templateUrl: './html/snav.component.html',
  styleUrls: ['./css/snav.component.css']
})
export class SNavComponent {

  title = 'Music ';
  menuArr;
  menus=[ {'main':'my music','sub':['albums','artists','songs']},
          {'main':'streams','sub':[]},
          {'main':'playlists','sub':[]},
          {'main':'now playing','sub':[]}
        ];
  
  constructor() {  }
  ngOnInit(){  }

  ngAfterViewInit(){
    //document.getElementsByClassName('nav-item')[0].classList.add('nav-active');
    this.menuArr=document.getElementsByClassName('nav-item');
  }

  navHover(e){
    e=e.target;
    for(var i=0;i<this.menuArr.length;i++){
      if(e==this.menuArr[i]){
        if(i!=this.menuArr.length-1){
          this.menuArr[i+1].classList.add("nav-hover");
        }
        if(i!=0){
          this.menuArr[i-1].classList.add("nav-hover");
        }
      }
    }
  }

  navLeave(){
    for(var i=0;i<this.menuArr.length;i++){
      this.menuArr[i].classList.remove("nav-hover");
    }
  }
  
  /*
  navC(e){
    for(var i=0;i<this.menuArr.length;i++){
      this.menuArr[i].classList.remove('nav-active');
    }
    e.target.classList.add("nav-active");
  }
*/
}