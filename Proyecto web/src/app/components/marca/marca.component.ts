import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit {

  @Input('marca') marca: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
