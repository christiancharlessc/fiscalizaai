import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-grafico',
  templateUrl: 'grafico.html'
})
export class GraficoPage {
  // Doughnut
  public doughnutChartLabels:string[] = ['VR_CONCEDE_ATUAL', 'VR_EMEN_PARL_ATUAL', 'VR_INTERV_ATUAL', 'VR_CONTRA_ATUAL'];
  public doughnutChartData:number[] = [350, 450, 100, 300];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }  
}
