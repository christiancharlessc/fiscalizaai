import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../app/service/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [DataService]
})
export class HomePage {
  public atendimentos:any[];

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

}
