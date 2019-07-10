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

  constructor() { }

  ngOnInit() {
  }

}
