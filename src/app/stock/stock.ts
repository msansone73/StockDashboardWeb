import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Stock } from './stock.model';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './stock.html',
  styleUrl: './stock.css'
})
export class StockComponent implements OnInit {
  stocks: Stock[] = [];
  filterTick: string = ''; // Property to store the filter tick

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.loadAllStocks();
  }

  loadAllStocks(): void {
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

  filterStock(): void {
    if (this.filterTick) {
      this.stockService.getStockByTick(this.filterTick).subscribe(data => {
        this.stocks = [data]; // Display only the filtered stock
      }, error => {
        console.error('Error fetching stock:', error);
        this.stocks = []; // Clear stocks if not found or error
      });
    } else {
      this.loadAllStocks(); // Load all stocks if filter is empty
    }
  }
}

