import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Stock, Transaction, Provent } from './stock.model';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './stock.html',
  
})
export class StockComponent implements OnInit {
  stocks: Stock[] = [];
  selectedStock: Stock | undefined;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.loadAllStocks();
  }

  loadAllStocks(): void {
    this.stockService.getStocks().subscribe(data => {
      console.log('API Data:', data);
      this.stocks = data.map(item => {
        return {
          tick: item.tick,
          company: item.company,
          quantidadeAcoes: 100,
          totalInvestido: 10000,
          valorMedio: 100,
          valorTotalProventos: 500,
          proventosUltimos12Meses: 200,
          mediaUltimos4Meses: 50,
          transactions: [
            { data: new Date(), valor: 100, quantidade: 10, total: 1000 },
            { data: new Date(), valor: 105, quantidade: 5, total: 525 },
          ],
          provents: [
            { data: new Date(), valor: 10, quantidade: 100, total: 1000 },
            { data: new Date(), valor: 12, quantidade: 100, total: 1200 },
          ]
        };
      });
      console.log('Mapped Stocks:', this.stocks);
    });
  }
}

