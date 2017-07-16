import {Injectable} from '@angular/core'
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
constructor(private http: Http){

}

    getAgendas(){
      return  this.http
            .get('http://fiscalizaai.azurewebsites.net/api/fiscalizaai/BuscarAtendimentosPorGeolocalizacao')
            .map((res: Response)=> res.json());
    }
}

