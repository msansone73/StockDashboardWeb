export interface Transaction {
  data: Date;
  valor: number;
  quantidade: number;
  total: number;
}

export interface Provent {
  data: Date;
  valor: number;
  quantidade: number;
  total: number;
}

export interface Stock {
  tick: string;
  company: string;
  quantidadeAcoes: number;
  totalInvestido: number;
  valorMedio: number;
  valorTotalProventos: number;
  proventosUltimos12Meses: number;
  mediaUltimos4Meses: number;
  transactions: Transaction[];
  provents: Provent[];
}
