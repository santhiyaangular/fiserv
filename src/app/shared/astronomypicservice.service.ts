import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AstronomypicserviceService {

  constructor(private http:HttpClient) { }

  getAstronomyPics(){
    
    // let imgDateRange = ['2021-05-14','2021-05-21'];
    // let params = new HttpParams();

    // params.set('end_date','2021-05-21');
    
    let date='2021-05-13'  
    return this.http.get("https://api.nasa.gov/planetary/apod?api_key=U45tPhF9O4dAzYadcFmcAUYcghbWjbq0nhpUeOSh&start_date="+date);
  }
}
