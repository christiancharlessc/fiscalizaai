import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../app/service/data.service';
import { Injectable } from '@angular/core';
import { LocalizacaoService } from '../../app/service/localizacao.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [DataService]
})
export class HomePage {
  public atendimentos:any[];


  constructor(public navCtrl: NavController, private dataService: DataService, private localizacao: LocalizacaoService) {

  }
    ngOnInit() {
        // console.log(this.localizacao.GetGeolocalizacao());
       this.dataService.getAgendas().subscribe(result=>{           
          this.atendimentos = result;
          console.log(result);        
       },
       error=>{
          console.log(error);
       });
  }

}
