import { Component, OnInit } from '@angular/core';

import { HttpService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	public plans: any[];

  constructor(private http: HttpService) { }

  ngOnInit() {
  	this.http.setUrl('https://zuul.trusthub.com.br/trusthub-subadquirencia-ecommerce/public-services/produtos/TH_REC_ANT');
  	this.http.get().subscribe((data => {
  		this.plans = data;
  	}));
  }

  // public plans = [
  //   {
  //     title: 'SLIM',
  //     maquininha: '/assets/slim-2.png',
  //     totalPrice: '399,48',
  //     parcelas: '12',
  //     valorParcela: '9,88',
  //     description: 'Maquininha compacta que não precisa de celular com bateria de longa duração.',
  //   },
  //   {
  //     title: 'ULTRA',
  //     maquininha: '/assets/ultra-2.png',
  //     totalPrice: '479,88',
  //     parcelas: '12',
  //     valorParcela: '39,99',
  //     description: 'Equipamento portátil com tela touch, Impressora, bateria de longa duração e conexões 3G e WiFi.',
  //   }
  // ];

}
