import { Component,Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { ZadanierekrutacyjneService } from 'src/app/zadanierekrutacyjne.service';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  Lista$!:Observable<any[]>;
  ListaKategorie$!:Observable<any[]>;

  constructor(private service:ZadanierekrutacyjneService) { }



  @Input() osoba:any;
  id: number = 0;
  imie:string ="";
  nazwisko:string ="";
  email:string ="";
  idKategorii!:number;
  telefon:number = 0;
  data:any;


  ngOnInit(): void {
    this.id = this.osoba.id;
    this.imie = this.osoba.imie;
    this.nazwisko = this.osoba.nazwisko;
    this.email = this.osoba.email;
    this.idKategorii = this.osoba.idKategorii;
    this.telefon = this.osoba.telefon;
    this.data = this.osoba.data;
    this.Lista$ = this.service.getList();
    this.ListaKategorie$ = this.service.getListKategoria();
  }
  addNew(){
    var osoba = {
      imie:this.imie,
      nazwisko:this.nazwisko,
      email:this.email,
      idKategorii:this.idKategorii,
      telefon:this.telefon,
      data:this.data
    }
    this.service.addNew(osoba).subscribe(res =>
      {
        var closeBtn = document.getElementById('add-edit-modal-close');
        if(closeBtn){
          closeBtn.click();
        }

        var showAddSuccess = document.getElementById('add-success-alert');
        if(showAddSuccess){
          showAddSuccess.style.display = "block";
        }
        setTimeout(function(){
          if(showAddSuccess){
            showAddSuccess.style.display = "none"
          }
        },5000);
      })
  }

  updateN(){
    var osoba = {
      id:this.id,
      imie:this.imie,
      nazwisko:this.nazwisko,
      email:this.email,
      idKategorii:this.idKategorii,
      telefon:this.telefon,
      data:this.data
    }



    var id:number = this.id;

    this.service.updateN(id,osoba).subscribe(res =>
      {
        var closeBtn = document.getElementById('add-edit-modal-close');
        if(closeBtn){
          closeBtn.click();
        }

        var showUpdateSuccess = document.getElementById('update-success-alert');
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = "block";
        }
        setTimeout(function(){
          if(showUpdateSuccess){
            showUpdateSuccess.style.display = "none"
          }
        },5000);
      })
  }
}
