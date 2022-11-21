export class Empregador{
  id: number;
  nome: string;
  cnpj: string;
  email: string;
  telefone: string;
  cidade: Cidade;
  empresa: Empresa;
}

export class Cidade{
  id: number;
  nome: string;
  estado: Estado;
}

export class Estado{
  id: number;
  sigla: string;
}

export class Empresa{
  id: number;
  nome: string;
  endereco: string;
  email: string;
}
