import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public plans = [
    {
      title: 'SLIM',
      maquininha: '/assets/slim-2.png',
      totalPrice: '399,48',
      parcelas: '12',
      valorParcela: '9,88',
      description: 'Maquininha compacta que não precisa de celular com bateria de longa duração.',
    },
    {
      title: 'ULTRA',
      maquininha: '/assets/ultra-2.png',
      totalPrice: '479,88',
      parcelas: '12',
      valorParcela: '39,99',
      description: 'Equipamento portátil com tela touch, Impressora, bateria de longa duração e conexões 3G e WiFi.',
    }
  ];

}
