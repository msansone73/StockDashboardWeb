import { Stock } from './stock.model';

export interface Provent {
  id: number;
  date: string;
  type: string;
  stock: Stock;
  valueTotal: number;
  quantity: number;
}
