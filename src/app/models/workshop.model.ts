import { Colaborador } from './colaborador.model';

export interface Workshop {
  id: number;
  nome: string;
  dataRealizacao: string; // usei string para a data no formato ISO (pode ser alterado conforme a necessidade)
  descricao: string;
  colaboradores: Colaborador[];
}
