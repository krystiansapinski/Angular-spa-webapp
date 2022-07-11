import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadanieRekrutacyjneComponent } from './zadanie-rekrutacyjne.component';

describe('ZadanieRekrutacyjneComponent', () => {
  let component: ZadanieRekrutacyjneComponent;
  let fixture: ComponentFixture<ZadanieRekrutacyjneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZadanieRekrutacyjneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZadanieRekrutacyjneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
