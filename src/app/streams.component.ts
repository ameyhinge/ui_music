import { Component } from '@angular/core';

@Component({
  selector: 'streams',
  templateUrl: './html/streams.component.html',
  styleUrls: ['./css/streams.component.css']
})
export class StreamsComponent {

  snavMenus=['albums','artists','songs'];
  constructor() { }
  
}
