import { Component, OnInit } from '@angular/core';

type Menu = {
  title: string,
  path: string
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  itemsMenu = [
    {title: "Painel", path: '' },
    {title: "Produtos", path: 'products'}
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }

}
