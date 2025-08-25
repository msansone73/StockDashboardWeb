export interface Stock {
  tick: string;
  company: string;
}

export interface Resume {
  stockCount: number;
  totalInvested: number;
  averagePrice: number;
  totalProvents: number;
  totalProventsLast12Months: number;
  averageProventsLast4Months: number;
}

export interface Transaction {
  id: number;
  date: string;
  movimentacao: string;
  stock: Stock;
  untPrice: number;
  totalPrice: number;
  quantity: number;
}

export interface Provent {
  id: number;
  date: string;
  type: string;
  stock: Stock;
  valueTotal: number;
  quantity: number;
}

export interface StockDetail {
  tick: string;
  resume: Resume;
  transactions: Transaction[];
  provents: Provent[];
}
