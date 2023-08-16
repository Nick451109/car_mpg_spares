import { Component } from '@angular/core';
import { Carro } from 'src/app/interfaces/carro';
import { DataProviderService } from 'src/app/services/data-provider.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public data:Carro[] = [];
  displayedColumns: string[] = ['placa','modelo','marca', 'year','km/gal'];

  constructor(private dataProvider:DataProviderService){}
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Carro[]); 
    })
  }
}
