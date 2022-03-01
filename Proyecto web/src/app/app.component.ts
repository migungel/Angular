import { Component } from '@angular/core';
import { Imagen } from './interfaces/imagen.interfaces';
import { IPersonaje } from './interfaces/personajes.interfaces';
import { ProviderService } from './services/provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proyecto1';

  arrayMarcas: Imagen[] = [];

  nombre = "Miguel Angel Neira";
  arrSimpsons: IPersonaje[] = [];

  constructor(
    private providerService: ProviderService
  ){
    this.cargarImagen();
    this.cargarPersonaje();
    this.cargarPersonajeCantidad();
  }

  cargarPersonaje(){
    this.providerService.consultarSimpsons().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error("Error en servicio", error);
      }
    });
  }

  cargarPersonajeCantidad(){
    this.providerService.consultarSimpsonsCantidad(10).subscribe({
      next: (data) => {
        console.log(data);
        this.arrSimpsons = data;

        this.providerService.cantidadItem++;
      },
      error: (error) => {
        console.error("Error en servicio", error);
      }
    });
  }

  cargarImagen(){
    this.arrayMarcas = [
      {
        id: 1,
        nombre: "Coca Cola",
        url: "https://grupberca.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGZ3J1cGJlcmNhLmNvbSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMCUyRjAzJTJGY29jYWNvbGFhLnBuZyZjYWNoZU1hcmtlcj0xNjM3NzY3MzI4LTQ1Mjg3JnRva2VuPWNiYzQ4MWExZmUxOGZhNzY.q.png",
        valor: 100,
        cantidad: 3,
        marca: "https://tentulogo.com/wp-content/uploads/HistoriadellogodeCocaCola.jpg",
      },
      {
        id: 2,
        nombre: "Pepsi",
        url: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1dd.png",
        valor: 50,
        cantidad: 4,
        marca: "https://tentulogo.com/wp-content/uploads/cabecera-pepsi-post-marcas-cover-fb.jpg",
      },
      {
        id: 3,
        nombre: "Sprite",
        url: "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c1ed.png",
        valor: 30,
        cantidad: 2,
        marca: "https://admix360.files.wordpress.com/2019/12/sprite_logotipo-1.png",
      },
      {
        id: 4,
        nombre: "Güitig",
        url: "https://tiaecuador.vteximg.com.br/arquivos/ids/161100-1000-1000/243014000.jpg?v=636834491918870000",
        valor: 40,
        cantidad: 6,
        marca: "https://movil.market/wp-content/uploads/2020/05/guitig.png",
      },
      {
        id: 5,
        nombre: "Fanta",
        url: "https://www.pngplay.com/wp-content/uploads/12/Fanta-PNG-HD-Free-File-Download.png",
        valor: 60,
        cantidad: 1,
        marca: "https://turbologo.com/articles/wp-content/uploads/2020/02/Fanta-logo.png.webp",
      },
      {
        id: 6,
        nombre: "Tropical",
        url: "https://comisariatopopular.com/wp-content/uploads/2020/06/40380507-01-BASEIMAGE-Midres.png",
        valor: 14,
        cantidad: 5,
        marca: "https://seeklogo.com/images/C/cola-tropical-logo-3C93F2A983-seeklogo.com.png",
      },
      {
        id: 7,
        nombre: "inca Kola",
        url: "https://estiloperuano.com/wp-content/uploads/2020/05/Gaseosa-INCA-KOLA-Botella-3L.png",
        valor: 26,
        cantidad: 8,
        marca: "https://www.staffcreativa.pe/blog/wp-content/uploads/incakola-logo.png",
      },
    ];
  }

  imprimirResultados(event: any){
    console.log('Imprimiendo desde el padre ->', event);
  }
}
