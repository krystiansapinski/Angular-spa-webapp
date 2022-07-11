import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ZadanieRekrutacyjneComponent } from './zadanie-rekrutacyjne/zadanie-rekrutacyjne.component';
import { ShowComponent } from './ZadanieRekrutacyjne/show/show.component';
import { AddEditComponent } from './ZadanieRekrutacyjne/add-edit/add-edit.component';
import { ZadanierekrutacyjneService } from './zadanierekrutacyjne.service';
@NgModule({
  declarations: [
    AppComponent,
    ZadanieRekrutacyjneComponent,
    ShowComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [ZadanierekrutacyjneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
