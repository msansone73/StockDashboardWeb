import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock, StockDetail } from './stock.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {


  private apiUrl = `${environment.apiUrl}/api/stock`;

  constructor(private http: HttpClient) { }

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiUrl);
  }

  getStockDetailByTick(tick: string): Observable<StockDetail> {
    return this.http.get<StockDetail>(`${this.apiUrl}/detail/${tick}`);
  }
}

