import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Stock } from '../../models/stock.model';
import { StockDetail } from '../../models/stock-detail.model';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock',
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './stock.html',
  styleUrls: ['./stock.css']
})
export class StockComponent implements OnInit {
  stocks: Stock[] = [];
  selectedStockTick: string | undefined;
  selectedStockDetail: StockDetail | undefined;

  constructor(private stockService: StockService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadAllStocks();
  }

  loadAllStocks(): void {
    this.stockService.getStocks().subscribe(data => {
      this.stocks = data;
    });
  }

  onStockSelected(): void {
    if (this.selectedStockTick) {
      this.stockService.getStockDetailByTick(this.selectedStockTick).subscribe(data => {
        console.log('Stock detail received:', data);
        this.selectedStockDetail = data;
        this.cdr.detectChanges();
      });
    }
  }
}


