import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../app/service/data.service';
import {MissaoPage} from "../missao/missao"

@Component({
  selector: 'page-missoes',
  templateUrl: 'missoes.html'
})
export class MissoesPage {

  public atendimentos:any[];


  constructor(public navCtrl: NavController, private dataService: DataService,) {

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

  openPage(){
    this.navCtrl.push(MissaoPage);
  }

}
