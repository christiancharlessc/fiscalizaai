import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { DataService } from '../../app/service/data.service';
=======
import { Injectable } from '@angular/core';
import { LocalizacaoService } from '../../app/service/localizacao.service';
>>>>>>> bbedfa8312efc375fcc22d3b3a3634a1c354a27d

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [DataService]
})
export class HomePage {
  public atendimentos:any[];

<<<<<<< HEAD
  constructor(public navCtrl: NavController, private dataService: DataService) {

  }

    ngOnInit() {
       this.dataService.getAgendas().subscribe(result=>{       
          console.log(result);
          this.atendimentos = result;
          console.log(result);
       },
       error=>{
          console.log(error);
       });
  }

=======
  constructor(public navCtrl: NavController, private localizacaoservice:LocalizacaoService) {

  }

  ngOnInit () {
    console.log("Text");
    console.log(this.localizacaoservice.GetGeolocalizacao());
    console.log(this.localizacaoservice.coord);
  }
>>>>>>> bbedfa8312efc375fcc22d3b3a3634a1c354a27d
}
