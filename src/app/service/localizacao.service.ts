import { ElementRef, Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';

@Injectable() export class LocalizacaoService{
  mapa: any;
  public coord:any;


  constructor(private geolocation: Geolocation) {}
  
  GetGeolocalizacao(){    
     this.geolocation.getCurrentPosition().then((resp) => {
       console.log("entrei");        
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  };


}