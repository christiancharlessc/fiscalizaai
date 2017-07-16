import {Injectable} from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class DataService{


constructor(private http: Http){}
private serviceUrl: String = 'http://localhost:3000/api';

    getAgenda(data: any){
         return this.http
        .post('http://localhost:3000/api/agenda/getbydate',data)
        .map((res:Response)=> res.json());
    }

    getAgendas(){
        return this.http
        .get('http://localhost:3000/api/agenda')
        .map((res:Response)=> res.json());
    }
}
