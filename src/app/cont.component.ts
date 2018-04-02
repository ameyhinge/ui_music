import { Component } from '@angular/core';
import { CBarComponent } from './cbar.component';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'cont',
  templateUrl: './html/cont.component.html',
  styleUrls: ['./css/cont.component.css']
})
export class ContComponent implements OnInit{
  res;
  len;
  mymusic=['albums','artists','songs'];
  sMenuArr;
  subNav=this.mymusic;

  ngOnInit(){
    
  }
  ngAfterViewInit(){
    document.getElementsByClassName('sub-nav-item')[0].classList.add('sub-nav-active');
    this.sMenuArr=document.getElementsByClassName('sub-nav-item');
  }

  snavClk(e){
    for(var i=0;i<this.sMenuArr.length;i++){
      this.sMenuArr[i].classList.remove('sub-nav-active');
    }
    e.target.classList.add("sub-nav-active");
  }

  constructor(){}
}