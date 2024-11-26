import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Colaborador } from '../../models/colaborador.model';

@Component({
  selector: 'app-atas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './atas.component.html',
  styleUrls: ['./atas.component.scss'],
})
export class AtasComponent implements OnInit {
  atas: any[] = [];
  filteredAtas: any[] = [];

  colaboradorFilter: string = '';
  workshopFilter: string = '';
  dataFilter: string = '';

  constructor(private mockDataService: MockDataService, private router: Router) {}

  ngOnInit(): void {
    this.atas = this.mockDataService.getAtas();
    this.filteredAtas = this.atas;
  }
  
  filtrarAtas(): void {
    this.filteredAtas = this.atas.filter((ata) => {
      const matchColaborador = !this.colaboradorFilter || ata.workshop.colaboradores.some((c: Colaborador) => 
        c.nome.toLowerCase().includes(this.colaboradorFilter.toLowerCase())
      );
      const matchWorkshop = !this.workshopFilter || ata.workshop.nome.toLowerCase().includes(this.workshopFilter.toLowerCase());
      const matchData = !this.dataFilter || ata.workshop.dataRealizacao === this.dataFilter;
      return matchColaborador && matchWorkshop && matchData;
    });
  }

  viewWorkshopDetails(workshopId: number): void {
    this.router.navigate(['/workshop', workshopId]);
  }
     
  goToCharts(): void {
    this.router.navigate(['/graficos']);
  }
}
