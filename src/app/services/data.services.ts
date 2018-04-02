import {Injectable} from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService{
    mediaData=[
        {
            "title":"Sandeshey aatey hai",
            "album":"Border",
            "artist":"Sonu Nigam",
            "gener":"bollywood",
            "release_year":"1997"
        },
        {
            "title":"Hum kis gali",
            "album":"Doorie",
            "artist":"Aatif Aslam",
            "gener":"bollywood",
            "release_year":"2006"
        },
        {
            "title":"Ae jaate hue lamhe",
            "album":"Border",
            "artist":"Sonu Nigam",
            "gener":"bollywood",
            "release_year":"1997"
        },
        {
            "title":"Dhoom Pichuck",
            "album":"Dhoom",
            "artist":"Palash Sen",
            "gener":"Rock",
            "release_year":"1998"
        },
        {
            "title":"Aamne Saamne",
            "album":"Dhoom",
            "artist":"Palash Sen",
            "gener":"Rock",
            "release_year":"1998"
        },
        {
            "title":"Rab jaana",
            "album":"Mehfuz",
            "artist":"Palash Sen",
            "gener":"Indian rock",
            "release_year":"2006"
        },
        {
            "title":"Dil ko hazar",
            "album":"Murder",
            "artist":"Alisha Chinai",
            "gener":"bollywood",
            "release_year":"2004"
        },
        {
            "title":"Phir le aaya dil",
            "album":"Barfi",
            "artist":"Arijit Singh",
            "gener":"bollywood",
            "release_year":"2012"
        },
        {
            "title":"Gali me aaj chand",
            "album":"Zakhm",
            "artist":"Alka yagnik",
            "gener":"bollywood",
            "release_year":"2009"
        }
    ];

    public md = new BehaviorSubject<Object>("sample");
    public artistData=[];

    

    public getArtists(){
        this.artistData=[];

        for(var m=0;m<this.mediaData.length;m++){
            var chk=0;
            for(var n=0;n<m;n++){
              if(this.mediaData[m].artist===this.mediaData[n].artist){
                chk+=1;
                break;
              }
            }
            if(chk==0){
              this.artistData.push(this.mediaData[m].artist);
            }
        }
        return this.artistData;
    }

    public dataObject={'albumData':'','releaseYear':'','artist':''};
    public allData=[];
    
    public getAlbums(){
        this.allData=[];

        for(var m=0;m<this.mediaData.length;m++){
            var chk=0;
            for(var n=0;n<m;n++){
              if(this.mediaData[m].album===this.mediaData[n].album){
                chk+=1;
                break;
              }
            }
            if(chk==0){
              this.dataObject.albumData=(this.mediaData[m].album);
              this.dataObject.releaseYear=(this.mediaData[m].release_year);
              this.dataObject.artist=(this.mediaData[m].artist)
              this.allData.push(this.dataObject);
              this.dataObject={'albumData':'','releaseYear':'','artist':''};
            }
        }
        
        return this.allData;
    }
}


