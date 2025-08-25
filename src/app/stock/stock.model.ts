
export interface StockResume {

  stockCount: number;
  totalInvested: number;
  averagePrice: number;
  totalProvents: number;
  totalProventsLast12Months: number;
  averageProventsLast4Months: number;
}


export interface StockInfo {
  tick: string;
  company: string;
}

export interface Institution {
  id: number;
  name: string;
}

export interface StockTransaction {
  id: number;
  date: string;
  movimentacao: string;
  stock: StockInfo;
  untPrice: number;
  totalPrice: number;
  quantity: number;
  institution: Institution;

}

export interface Provent {
  id: number;
  date: string;
  type: string;
  stock: StockInfo;

  valueTotal: number;
  quantity: number;
}

export interface StockData {
  ticker: string;
  resume: StockResume;
  transactions: StockTransaction[];
  provents: Provent[];
}