import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Repas } from '../model/repas.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
private url="http://localhost:8080/api/";
  constructor(private http:HttpClient) { }
  CreateRepas(repasRequest:Repas){
    return this.http.post<Repas>(this.url+"/create",repasRequest);
  }
  getAllRepas(){
    return this.http.get<any>(`${this.url}/all`);
  }
  public updateRepas(repasRequest:Repas):Observable<Repas> {
    return this.http.put<Repas>(this.url+"/update",repasRequest);
}

public deleteRepas(id:Number):Observable<void> {
    return this.http.delete<void>(this.url+`/delete/${id}`);
}

}
