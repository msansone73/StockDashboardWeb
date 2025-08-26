import { Stock } from './stock.model';

export interface Transaction {
  id: number;
  date: string;
  movimentacao: string;
  stock: Stock;
  untPrice: number;
  totalPrice: number;
  quantity: number;
}
