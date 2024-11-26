import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { Workshop } from '../../models/workshop.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workshop-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="workshop">
      <h1>{{ workshop.nome }}</h1>
      <p><strong>Data:</strong> {{ workshop.dataRealizacao | date }}</p>
      <p><strong>Descrição:</strong> {{ workshop.descricao }}</p>
      <h2>Colaboradores Presentes</h2>
      <ul>
        <li *ngFor="let colaborador of workshop.colaboradores">{{ colaborador.nome }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./workshop-details.component.scss'],
})
export class WorkshopDetailComponent implements OnInit {
  workshop: Workshop | undefined;

  constructor(
    private route: ActivatedRoute,
    private mockDataService: MockDataService
  ) {}

  ngOnInit(): void {
    const workshopId = Number(this.route.snapshot.paramMap.get('id'));
    this.workshop = this.mockDataService.getWorkshopById(workshopId);
  }
}
