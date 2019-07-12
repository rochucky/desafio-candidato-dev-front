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

}
