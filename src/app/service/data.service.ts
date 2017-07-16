<<<<<<< HEAD
import {Injectable} from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class DataService{


constructor(private http: Http){}
private serviceUrl: String = 'http://localhost:3000/api';

    getAgenda(data: any){
         return this.http
        .post('http://fiscalizaai.azurewebsites.net/Help/Api/POST-api-FinalizaAi',data)
        .map((res:Response)=> res.json());
    }

    getAgendas(){
        console.log("entrei servico");
        return this.http
        .get('http://fiscalizaai.azurewebsites.net/Help/Api/POST-api-FinalizaAi')
        .map((res:Response)=> res.json());
    }
}
=======
>>>>>>> bbedfa8312efc375fcc22d3b3a3634a1c354a27d
