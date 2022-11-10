/* eslint-disable @typescript-eslint/naming-convention */
export class Empregado{
  id: number;
  nome: string;
  cpf: string;
  idade: number;
  email: string;
  telefone: string;
  experiencias: string;
  disponibilidade: string;
  cidade: Cidade;
}

export class Cidade{
  id: number;
  nome: string;
}

export class Estado{
  id: number;
  sigla: string;
}
