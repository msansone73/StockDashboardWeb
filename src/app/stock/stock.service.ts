import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockData, StockInfo } from './stock.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {


  private apiUrl = `${environment.apiUrl}/api/stock`;

  constructor(private http: HttpClient) { }

  getStocks(): Observable<StockInfo[]> {
    return this.http.get<StockInfo[]>(this.apiUrl);
  }

  getStockDetailByTick(tick: string): Observable<StockData> {
    return this.http.get<StockData>(`${this.apiUrl}/detail/${tick}`);
  }
}

