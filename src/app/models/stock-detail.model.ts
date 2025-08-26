import { Resume } from './resume.model';
import { Transaction } from './transaction.model';
import { Provent } from './provent.model';

export interface StockDetail {
  tick: string;
  resume: Resume;
  transactions: Transaction[];
  provents: Provent[];
}
