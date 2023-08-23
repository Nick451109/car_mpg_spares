import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { Carro } from 'src/app/interfaces/carro';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, NgIf, NgFor],
})
export class ReportComponent {
  dataCarros:Carro[] = [];
  carrosSelect = new FormControl('');
  constructor(private dataProvider: DataProviderService){}
  ngOnInit(){
    this.dataProvider.getResponse().subscribe((response)=>{
      this.dataCarros = (response as Carro[]); 
    })
    
  }
 
}