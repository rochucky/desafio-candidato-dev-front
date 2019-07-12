import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	public trustFooterLinks = [
    {
      text: 'Videos',
      url: ''
    },
    {
      text: 'Trust na Mídia',
      url: ''
    },
    {
      text: 'Assessoria de Imprensa',
      url: ''
    },
    {
      text: 'Política de Privacidade',
      url: ''
    }
  ];

  public ForYourCompany = [
    {
      text: 'Crédito em Dobro',
      url: ''
    },
    {
      text: 'Conta de Pagamento Digital',
      url: ''
    },
    {
      text: 'Empréstimos',
      url: ''
    },
    {
      text: 'Antecipação de Duplicatas',
      url: ''
    }
  ];

  public innerWidth: any;
  public list_trust: boolean = false;
  public list_fycompany: boolean = false;
  public list_truster: boolean = false;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  collapse(evt, elm, item) {
    switch(item){
      case 'trust':
        this.list_trust = this.list_trust ? false : true;
        break;
      case 'fycompany':
        this.list_fycompany = this.list_fycompany ? false : true;
        break;
      case 'truster':
        this.list_truster = this.list_truster ? false : true;
        break;
    }
    window.scroll(0,document.body.scrollHeight);
  }

}
