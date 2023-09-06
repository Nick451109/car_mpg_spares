import { Component } from '@angular/core';
import { Carro } from 'src/app/interfaces/carro';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public data:Carro[] = [];
  displayedColumns: string[] = ['placa','modelo','marca','km/gal','Expenses per month'];
  message:string = "Calculo basado semanalmente en un promedio de 23.1km al día a $2,40 por galón por una semana.\n Fórmula utilizada: Gasto semanal = ((23.1km * 7 dias de la semana)/ Consumo en km por galón) * Precio por galón";
  PrecioGalon:number = 2.40;
  constructor(private dataProvider:DataProviderService){}
  ngOnInit() {
    this.dataProvider.getResponseCarro().subscribe((response) => { 
      this.data = (response as Carro[]); 
    })
  }
}
