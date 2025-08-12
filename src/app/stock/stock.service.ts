import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiUrl = 'http://localhost:8080/api/stock';

  constructor(private http: HttpClient) { }

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiUrl);
  }

  getStockByTick(tick: string): Observable<Stock> {
    return this.http.get<Stock>(`${this.apiUrl}/${tick}`);
  }
}

