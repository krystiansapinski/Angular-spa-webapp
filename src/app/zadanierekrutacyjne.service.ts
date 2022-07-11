import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ZadanierekrutacyjneService {

  readonly ZadanierekrutacyjneUrlAPI = "https://localhost:7170/api";
  
  constructor(private http:HttpClient) { }

  getList():Observable<any[]> {
    return this.http.get<any>(this.ZadanierekrutacyjneUrlAPI + '/ZadanieRekrutacyjnes');
  }


  addNew(data:any){
    return this.http.post(this.ZadanierekrutacyjneUrlAPI + '/ZadanieRekrutacyjnes', data);
  }

  updateN(id:number|string, data:any){
    return this.http.put(this.ZadanierekrutacyjneUrlAPI + `/ZadanieRekrutacyjnes/${id}`, data);
  }

  deleteN(id:number|string){
    return this.http.delete(this.ZadanierekrutacyjneUrlAPI + `/ZadanieRekrutacyjnes/${id}`);
  }

  getListKategoria():Observable<any[]> {
    return this.http.get<any>(this.ZadanierekrutacyjneUrlAPI + '/Kategorias');
  }


  addNewKategoria(data:any){
    return this.http.post(this.ZadanierekrutacyjneUrlAPI + '/Kategorias', data);
  }

  updateKategoria(id:number|string, data:any){
    return this.http.put(this.ZadanierekrutacyjneUrlAPI + `/Kategorias/${id}`, data);
  }

  deleteKategoria(id:number|string){
    return this.http.delete(this.ZadanierekrutacyjneUrlAPI + `/Kategorias/${id}`);
  }
}
