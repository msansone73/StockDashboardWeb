import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stock } from './stock.model';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  imports: [CommonModule],
  templateUrl: './stock.html',
  styleUrl: './stock.css'
})
export class StockComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.getStocks().subscribe(data => {
      console.log('API Data:', data);
      this.stocks = data.map(item => {
        const mappedItem = {
          tick: item.tick,
          company: item.company
        };
        console.log('Mapped Item:', mappedItem);
        return mappedItem;
      });
      console.log('Mapped Stocks:', this.stocks);
    });
  }
}
