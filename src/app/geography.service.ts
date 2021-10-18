import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:"root"
})

export class GeographyService{

constructor(private http :HttpClient){}

getData(){

   return this.http.get(
    'https://community-open-weather-map.p.rapidapi.com/climate/month',
    {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'd8090352e6msh336817927c0ec02p1de27ajsn9eb8f48f4160'
      }) ,
      params: new HttpParams().set('q','San Francisco')
    }
   )
}

}