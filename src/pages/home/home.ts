import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { LocalizacaoService } from '../../app/service/localizacao.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private localizacaoservice:LocalizacaoService) {

  }

  ngOnInit () {
    console.log("Text");
    console.log(this.localizacaoservice.GetGeolocalizacao());
    console.log(this.localizacaoservice.coord);
  }
}
