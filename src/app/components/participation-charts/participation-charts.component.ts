import { Component } from '@angular/core';
import { Chart, BarController, ChartConfiguration, ChartData } from 'chart.js/auto';
import { MockDataService } from '../../services/mock-data.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-participation-charts',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './participation-charts.component.html',
  styleUrls: ['./participation-charts.component.scss'],
})
export class ParticipationChartsComponent {
  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };

  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Participação nos Workshops',
        backgroundColor: '#42a5f5',
      },
    ],
  };

  pieChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4caf50', '#ab47bc'],
      },
    ],
  };

  constructor(private mockDataService: MockDataService) {    
    Chart.register([BarController]);
    this.loadChartsData();
  }

  private loadChartsData(): void {
    const atas = this.mockDataService.getAtas();

    // Participação por Colaborador
    const colaboradorParticipacoes = new Map<string, number>();
    atas.forEach((ata) => {
      ata.workshop.colaboradores.forEach((colaborador: any) => {
        const count = colaboradorParticipacoes.get(colaborador.nome) || 0;
        colaboradorParticipacoes.set(colaborador.nome, count + 1);
      });
    });

    this.barChartData.labels = Array.from(colaboradorParticipacoes.keys());
    this.barChartData.datasets[0].data = Array.from(
      colaboradorParticipacoes.values()
    );

    // Colaboradores por Workshop
    const workshopColaboradores = atas.map(
      (ata) => ata.workshop.colaboradores.length
    );

    this.pieChartData.labels = atas.map((ata) => ata.workshop.nome);
    this.pieChartData.datasets[0].data = workshopColaboradores;
  }
}
