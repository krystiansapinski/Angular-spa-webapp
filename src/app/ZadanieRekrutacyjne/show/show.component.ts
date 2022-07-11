import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ZadanierekrutacyjneService } from 'src/app/zadanierekrutacyjne.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  Lista$!:Observable<any[]>;
  ListaKategorie$!:Observable<any[]>;
  ListaKategorie:any=[];
  
  MapaKategorii:Map<number, string> = new Map()

  constructor(private service:ZadanierekrutacyjneService) { }

  ngOnInit(): void {
    this.Lista$ = this.service.getList();
    this.ListaKategorie$ = this.service.getListKategoria();
    this.refreshMap();
  }

  activateAddEdit:boolean = false;
  osoba:any;

  modalAdd(){
    this.osoba = {
      id:0,
      imie:null,
      nazwisko:null,
      email:null,
      idKategorii:null,
      telefon:null,
      data:null
    }
    this.activateAddEdit = true;
  }
  modalEdit(item:any){
      this.osoba = item;
      this.activateAddEdit =true; 
  }
  modalDelete(item:any){
    this.service.deleteN(item.id).subscribe(res =>
      {
        var closeBtn = document.getElementById('add-edit-modal-close');
        if(closeBtn){
          closeBtn.click();
        }

        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function(){
          if(showDeleteSuccess){
            showDeleteSuccess.style.display = "none"
          }
        },5000);
        this.Lista$ = this.service.getList();
      })
  }
  modalClose(){
    this.activateAddEdit = false;
    this.Lista$ = this.service.getList();
  }

  refreshMap(){
    this.service.getListKategoria().subscribe(data => {
      this.ListaKategorie = data;
      for(let i = 0; i < data.length; i++)
      {
        this.MapaKategorii.set(this.ListaKategorie[i].id, this.ListaKategorie[i].nazwaKategorii);
      }
    })
  }

}
