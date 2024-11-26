import { Injectable } from '@angular/core';
import { Workshop } from '../models/workshop.model';

interface Colaborador {
  id: number;
  nome: string;
}

interface Ata {
  id: number;
  workshop: Workshop;
}

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private colaboradores: Colaborador[] = [
    { id: 1, nome: 'João Silva' },
    { id: 2, nome: 'Maria Oliveira' },
    { id: 3, nome: 'Carlos Souza' },
    { id: 4, nome: 'Ana Santos' },
    { id: 5, nome: 'Pedro Lima' },
    { id: 6, nome: 'Patrícia Costa' },
    { id: 7, nome: 'Ricardo Alves' },
    { id: 8, nome: 'Fernanda Rocha' },
    { id: 9, nome: 'Lucas Pereira' },
    { id: 10, nome: 'Juliana Martins' },
    { id: 11, nome: 'Rafael Ribeiro' },
    { id: 12, nome: 'Bruna Costa' },
    { id: 13, nome: 'Felipe Almeida' },
    { id: 14, nome: 'Tatiane Fernandes' },
    { id: 15, nome: 'Marco Aurélio' }
  ];

  private workshops: Workshop[] = [
    {
      id: 1,
      nome: 'Workshop de Desenvolvimento Web',
      dataRealizacao: '2024-01-10',
      descricao: 'Introdução ao desenvolvimento web com Angular e .NET.',
      colaboradores: [this.colaboradores[0], this.colaboradores[1], this.colaboradores[3], this.colaboradores[6]]
    },
    {
      id: 2,
      nome: 'Workshop de JavaScript Avançado',
      dataRealizacao: '2024-02-15',
      descricao: 'Técnicas avançadas de JavaScript e ES6.',
      colaboradores: [this.colaboradores[2], this.colaboradores[4], this.colaboradores[5], this.colaboradores[7]]
    },
    {
      id: 3,
      nome: 'Workshop de Banco de Dados',
      dataRealizacao: '2024-03-20',
      descricao: 'Aprenda sobre bancos de dados relacionais e SQL Server.',
      colaboradores: [this.colaboradores[0], this.colaboradores[3], this.colaboradores[8], this.colaboradores[9]]
    },
    {
      id: 4,
      nome: 'Workshop de UX/UI Design',
      dataRealizacao: '2024-04-05',
      descricao: 'Introdução ao design de interfaces e experiência do usuário.',
      colaboradores: [this.colaboradores[1], this.colaboradores[4], this.colaboradores[7], this.colaboradores[10]]
    },
    {
      id: 5,
      nome: 'Workshop de DevOps',
      dataRealizacao: '2024-05-12',
      descricao: 'Técnicas e ferramentas de automação e integração contínua.',
      colaboradores: [this.colaboradores[5], this.colaboradores[6], this.colaboradores[8], this.colaboradores[11]]
    },
    {
      id: 6,
      nome: 'Workshop de Testes Automatizados',
      dataRealizacao: '2024-06-19',
      descricao: 'Como automatizar testes em suas aplicações.',
      colaboradores: [this.colaboradores[2], this.colaboradores[9], this.colaboradores[12]]
    },
    {
      id: 7,
      nome: 'Workshop de Segurança da Informação',
      dataRealizacao: '2024-07-25',
      descricao: 'Melhores práticas para garantir a segurança de suas aplicações.',
      colaboradores: [this.colaboradores[1], this.colaboradores[4], this.colaboradores[6], this.colaboradores[13]]
    },
    {
      id: 8,
      nome: 'Workshop de Cloud Computing',
      dataRealizacao: '2024-08-30',
      descricao: 'Introdução aos serviços de computação em nuvem e AWS.',
      colaboradores: [this.colaboradores[7], this.colaboradores[8], this.colaboradores[10], this.colaboradores[14]]
    },
    {
      id: 9,
      nome: 'Workshop de Python para Data Science',
      dataRealizacao: '2024-09-12',
      descricao: 'Aprenda a usar Python para ciência de dados e análise.',
      colaboradores: [this.colaboradores[3], this.colaboradores[6], this.colaboradores[12]]
    },
    {
      id: 10,
      nome: 'Workshop de Inteligência Artificial',
      dataRealizacao: '2024-10-25',
      descricao: 'Fundamentos da inteligência artificial e aprendizado de máquina.',
      colaboradores: [this.colaboradores[5], this.colaboradores[7], this.colaboradores[9], this.colaboradores[13]]
    }
  ];

  constructor() { }

  getColaboradores(): Colaborador[] {
    return this.colaboradores;
  }

  getWorkshops(): Workshop[] {
    return this.workshops;
  }
  
  // Método para obter todas as atas (workshops)
  getAtas(): any[] {
    return this.workshops.map((workshop) => ({
      id: workshop.id,
      workshop: workshop,
    }));
  }

  // Método para buscar workshop por ID
  getWorkshopById(id: number): Workshop | undefined {
    return this.workshops.find(workshop => workshop.id === id);
  }
}
