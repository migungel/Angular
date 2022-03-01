import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-imagen',
  templateUrl: './card-imagen.component.html',
  styleUrls: ['./card-imagen.component.scss']
})
export class CardImagenComponent implements OnInit {

  @Input('id') id: number = 0;
  @Input('urlMarcas') urlMarcas: string = "";
  @Input('nombre') nombre: string = "";
  @Input('valor') valor: number = 0;
  @Input('cantidad') cantidad: number = 0;
  @Output('clickBtnRegistrar') clickBtnRegistrar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  registrar(){
    console.log('CLICK desde el hijo --> ' + this.id);
    this.clickBtnRegistrar.emit(this.id);
  }

}
