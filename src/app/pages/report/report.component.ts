import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataProviderService } from 'src/app/services/data-provider.service';
import {MatTableModule} from '@angular/material/table';
import { Carro } from 'src/app/interfaces/carro';
import { Persona } from 'src/app/interfaces/persona';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  
];
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, NgIf, NgFor, MatTableModule],
})
export class ReportComponent {
  dataCarros:Carro[] = [];
  dataPersonas:Persona[] = [];
  personasSelect = new FormControl('');
  displayedColumns: string[] = ['placa','modelo','marca', 'year','km/gal'];
  constructor(private dataProvider: DataProviderService){}

  ngOnInit(){
    
    this.dataProvider.getResponseCarro().subscribe((response)=>{
      this.dataCarros = (response as Carro[]); 
    })
    this.dataProvider.getResponsePersona().subscribe((response)=>{
      this.dataPersonas = (response as Persona[]); 
    })
    
  }

  selection(id:number){
    this.dataProvider.getResponseCarroByPersona(id).subscribe((response)=>{
      this.dataCarros = (response as Carro[]);
    })
  }

 
}