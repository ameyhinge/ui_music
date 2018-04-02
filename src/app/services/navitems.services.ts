import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class navService{
    navItems=[
        {
            "primary":"my music",
            "sub_menu":["albums","artists","songs"]
        },
        {
            "primary":"stream",
            "sub_menu":[]
        },
        {
            "primary":"playlists",
            "sub_menu":["Playlist 1"] 
        },
        {
            "primary":"now playing",
            "sub_menu":[]
        }
    ];
    public res = new BehaviorSubject<Object>("dd");
    public len = new BehaviorSubject<Number>(0);

    public navClick(e){
        for(let item of this.navItems){
            if(item.primary==e.toString()){
                this.res.next(item.sub_menu);
                this.len.next(item.sub_menu.length); 
            }
        }
    }

    res1=this.res.asObservable();
    len1=this.len.asObservable();
}