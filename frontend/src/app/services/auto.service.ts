import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auto } from '../models/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  selectedAuto: Auto;
  autos: Auto[];

  readonly URL_API = 'http://localhost:3000/api/autos'

  constructor(private http: HttpClient) {
    this.selectedAuto = new Auto();
   }

  getAutos() {
    return this.http.get(this.URL_API);
     
  }

  postAuto(Auto: Auto){
    return this.http.post(this.URL_API, Auto);

  }

  putAuto(Auto: Auto){
    return this.http.put(this.URL_API + `/${Auto._id}` , Auto);
  }

  deleteAuto(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);

  }

}
