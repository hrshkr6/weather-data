import { Component } from '@angular/core';
import { GeographyService } from './geography.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   
})
export class AppComponent {
  title = 'api-call';
  weatherData;

  constructor(private geoService:GeographyService){
     this.geoService.getData().subscribe(data =>{
       
       this.weatherData=data;
       console.log(data)
     });
  }

 
}
